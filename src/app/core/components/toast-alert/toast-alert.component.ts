import { Component, Input, OnInit } from '@angular/core';
import { ToastsService } from 'src/app/core/components/toast-alert/services/toast-alert.service';

@Component({
  selector: 'app-core-toast-alert',
  templateUrl: './toast-alert.component.html',
})
export class ToastComponent {

  constructor(private toastsService: ToastsService) {
    this.toasts = toastsService.getToasts();
  }

  toasts: ToastEntity[] = []

  onCrossClick(index: number) {
    this.toastsService.closeToast(index)
  }

  isSuccess(toastState: ToastState): boolean {
    return toastState == ToastState.SUCCESS
  }

  isError(toastState: ToastState): boolean {
    return toastState == ToastState.ERROR
  }
}

export enum ToastState {
  SUCCESS,
  ERROR
}

export interface ToastEntity {
  title: string,
  description: string,
  state: ToastState
}