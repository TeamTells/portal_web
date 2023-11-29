export class LoginResponseJson {

  constructor(
    readonly accessJwtToken: string,
    readonly user: UserJson,
    readonly company: CompanyJson
  ) {
  }

}

export class UserJson {

  constructor(
    readonly id: number
  ) {
  }

}

export class CompanyJson {

  constructor(
    readonly id: number
  ) {
  }

}
