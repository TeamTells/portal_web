export class LoginResponseJson {

  constructor(
    readonly accessJwtToken: string,
    readonly refreshToken: string,
  ) {
  }

}
