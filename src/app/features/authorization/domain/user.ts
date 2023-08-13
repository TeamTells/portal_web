export class User {

  constructor(
    readonly accessJwtToken: string,
    readonly email: string,
    readonly id: string,
    readonly login: string
  ) {
  }

}
