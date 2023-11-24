import { Injectable } from "@angular/core";
import { ToastAtributes } from "../toast-alert.component";

@Injectable() export class ToastsService {

    constructor() {}

    toasts: ToastAtributes[] = []

    public getToasts(): ToastAtributes[] {
        return this.toasts
    }

    public createToast(toast: ToastAtributes): ToastAtributes[] {
        this.toasts.push(toast);
        return this.getToasts()
    }

    public closeToast(index: number): ToastAtributes[] {
        this.toasts.splice(index, 1);
        return this.getToasts()
    }
}