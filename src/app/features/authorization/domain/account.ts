export class Account {

  constructor(
    readonly jwtToken: string,
    readonly user: User,
    readonly company: Company
  ) {
  }

}

export class User {

  constructor(
    readonly id: number
  ) {
  }

}

export class Company {

  constructor(
    readonly id: number
  ) {
  }

}
