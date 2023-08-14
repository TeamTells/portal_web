export class User {

  constructor(
    readonly jwtToken: string,
    readonly email: string,
    readonly id: string,
    readonly login: string
  ) {
  }

}
