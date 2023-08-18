export class EmployeeListItemViewModel {
    readonly userName: string
    readonly avatarUrl: string
    readonly email: string
    constructor(userName: string,
                avatarUrl: string,
                email: string) {
        this.userName = userName
        this.avatarUrl = avatarUrl
        this.email = email
    }
}
