import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

const usersKey = 'angular-9-jwt-refresh-token-users';
const users: FakeUser[] = JSON.parse(localStorage.getItem(usersKey)!) || [];

if (!users.length) {
  users.push({ id: 1,  firstName: 'Test', lastName: 'User', login: 'test', password: 'test', refreshTokens: [] });
  localStorage.setItem(usersKey, JSON.stringify(users));
}

interface FakeUser {
  id: number
  firstName: string
  lastName: string
  login: string
  password: string
  refreshTokens: string []
}

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/login') && method === 'POST':
          return authenticate();
        case url.endsWith('/users/refresh-token') && method === 'POST':
          return refreshToken();
        case url.endsWith('/users/logout') && method === 'POST':
          return revokeToken();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        default:
          return next.handle(request);
      }
    }

    function authenticate() {
      const { login, password } = body;
      const user = users.find(x => x.login === login && x.password === password);

      console.log(users)
      console.log(body)
      if (!user) return error({message: 'Login or password is incorrect'});

      user.refreshTokens.push(generateRefreshToken());
      localStorage.setItem(usersKey, JSON.stringify(users));

      return ok({
        body: {
          id: user.id,
          login: user.login,
          firstName: user.firstName,
          lastName: user.lastName,
          jwtToken: generateJwtToken()
        }
      })
    }

    function refreshToken() {
      const refreshToken = getRefreshToken();

      if (!refreshToken) return unauthorized();

      const user = users.find(x => x.refreshTokens.includes(refreshToken));

      if (!user) return unauthorized();

      user.refreshTokens = user.refreshTokens.filter(x => x !== refreshToken);
      user.refreshTokens.push(generateRefreshToken());
      localStorage.setItem(usersKey, JSON.stringify(users));

      return ok({
        body: {
          id: user.id,
          login: user.login,
          firstName: user.firstName,
          lastName: user.lastName,
          jwtToken: generateJwtToken()
        }
      })
    }

    function revokeToken() {
      if (!isLoggedIn()) return unauthorized();

      const refreshToken = getRefreshToken();
      const user = users.find(x => x.refreshTokens.includes(refreshToken));

      if (user == undefined) throw Error("revokeToken() user included " + refreshToken + "not found")

      // revoke token and save
      user.refreshTokens = user.refreshTokens.filter(x => x !== refreshToken);
      localStorage.setItem(usersKey, JSON.stringify(users));

      return ok({});
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok({body: users});
    }

    // helper functions

    function ok({body}: { body?: any }) {
      return of(new HttpResponse({ status: 200, body }))
    }

    function error({message}: { message: any }) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorized' } });
    }

    function isLoggedIn() {
      const authHeader = headers.get('Authorization');

      if (authHeader == null) throw Error("isLoggedIn() authHeader not found")
      if (!authHeader.startsWith('Bearer fake-jwt-token')) return false;

      const jwtToken = JSON.parse(atob(authHeader.split('.')[1]));
      const tokenExpired = Date.now() > (jwtToken.exp * 1000);
      if (tokenExpired) return false;

      return true;
    }

    function generateJwtToken() {
      // create token that expires in 15 minutes
      const tokenPayload = { exp: Math.round(new Date(Date.now() + 2*60*1000).getTime() / 1000) }
      return `fake-jwt-token.${btoa(JSON.stringify(tokenPayload))}`;
    }

    function generateRefreshToken() {
      const token = new Date().getTime().toString();

      const expires = new Date(Date.now() + 7*24*60*60*1000).toUTCString();
      document.cookie = `refreshToken=${token}; expires=${expires}; path=/`;

      return token;
    }

    function getRefreshToken() {
      // get refresh token from cookie
      return (document.cookie.split(';').find(x => x.includes('refreshToken')) || '=').split('=')[1];
    }
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
