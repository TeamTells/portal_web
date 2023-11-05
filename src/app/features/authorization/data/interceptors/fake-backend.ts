import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';

const usersKey = 'angular-9-jwt-refresh-token-users';
const users: FakeUser[] = JSON.parse(localStorage.getItem(usersKey)!) || [];

if (!users.length) {
  users.push({
    id: 1,
    login: 'test',
    password: 'e057cab20ad95e02d15baada6e394ef62884769d7006a1cd09bd8b0e43b76d22',
    salt: "test_salt",
    refreshTokens: []
  });
  localStorage.setItem(usersKey, JSON.stringify(users));
}

interface FakeUser {
  id: number
  login: string
  password: string
  salt: string
  refreshTokens: string []
}

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      if (url.startsWith("fake_backend")) {
        switch (true) {
          case url.endsWith('/authorization/login') && method === 'POST':
            return authenticate();
          case url.endsWith('/authorization/refresh-token') && method === 'GET':
            return refreshToken();
          case url.endsWith('/authorization/logout') && method === 'POST':
            return revokeToken();
          case url.includes('/authorization/salt') && method === 'GET':
            return getSalt(url);
          default:
            return next.handle(request);
        }
      } else {
        return next.handle(request)
      }
    }

    function authenticate() {
      const {login, password} = body;
      const user = users.find(x => x.login === login && x.password === password);

      console.log(users)
      console.log(body)
      if (!user) return throwError({status: 404, error: {message: 'Login or password is incorrect'}});

      user.refreshTokens.push(generateRefreshToken());
      console.log(users)

      localStorage.setItem(usersKey, JSON.stringify(users));
      return ok({
        body: {
          accessJwtToken: generateJwtToken()
        }
      })
    }

    function refreshToken() {
      const refreshToken = getRefreshToken();

      if (!refreshToken) return unauthorized();

      const user = users.find(x => x.refreshTokens.includes(refreshToken));

      console.log(user)
      if (!user) return unauthorized();

      user.refreshTokens = user.refreshTokens.filter(x => x !== refreshToken);
      user.refreshTokens.push(generateRefreshToken());
      localStorage.setItem(usersKey, JSON.stringify(users));

      return ok({
        body: {
          jwtAccessToken: generateJwtToken()
        }
      })
    }

    function revokeToken() {
      if (!isLoggedIn()) return unauthorized();

      const refreshToken = getRefreshToken();
      const user = users.find(x => x.refreshTokens.includes(refreshToken));

      if (user == undefined) throw Error("revokeToken() user included " + refreshToken + "not found")

      user.refreshTokens = user.refreshTokens.filter(x => x !== refreshToken);
      localStorage.setItem(usersKey, JSON.stringify(users));

      return ok({});
    }

    function getSalt(url: string) {
      const splitUrl = url.split("/")
      const login = splitUrl[splitUrl.length - 1]
      const user = users.find(user => user.login == login);

      return ok({
        body: {
          salt: user?.salt
        }
      });
    }

    function ok({body}: { body?: any }) {
      return of(new HttpResponse({status: 200, body}))
    }

    function unauthorized() {
      return throwError({status: 401, error: {message: 'Unauthorized'}});
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
      const tokenPayload = {exp: Math.round(new Date(Date.now() + 2 * 60 * 1000).getTime())}
      return `fake-jwt-token.${btoa(JSON.stringify(tokenPayload))}`;
    }

    function generateRefreshToken() {
      const token = new Date().getTime().toString();

      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `refreshToken=${token}; expires=${expires}; path=/`;
      return token;
    }

    function getRefreshToken() {
      return (document.cookie.split(';').find(x => x.includes('refreshToken')) || '=').split('=')[1];
    }
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
