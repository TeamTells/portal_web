import { Injectable } from "@angular/core";


@Injectable(
    {providedIn:"root"}
)
export class ChangePasswordState{
    readonly actualPassword: string = '';
    readonly actualPasswordError: string = '';

    readonly newPassword: string = '';
    readonly newPasswordError: string = '';

    readonly verificationPassword: string = '';
    readonly verificationPasswordError: string = '';

    readonly isLoading: boolean = false;
    // TODO:   подумать над этим
    readonly error: string = '';
}