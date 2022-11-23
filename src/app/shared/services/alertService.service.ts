import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  public success(title: string, text?: string, timer?: number) {
    return this.show({
      title,
      text,
      timer,
      showConfirmButton: false,
      position: 'top-right',
      toast: true,
      showCloseButton: timer ? false : true,
      icon: 'success',
    });
  }

  public error(title: string, text?: string, timer?: number) {
    return this.show({
      title,
      text,
      timer,
      showConfirmButton: false,
      position: 'top-right',
      toast: true,
      showCloseButton: timer ? false : true,
      icon: 'error',
    });
  }

  public info(title: string, text?: string, timer?: number) {
    return this.show({
      title,
      text,
      timer,
      showConfirmButton: false,
      position: 'top-right',
      toast: true,
      showCloseButton: timer ? false : true,
      icon: 'info',
    });
  }

  public warning(title: string, text?: string, timer?: number) {
    return this.show({
      title,
      text,
      timer,
      showConfirmButton: false,
      position: 'top-right',
      toast: true,
      showCloseButton: timer ? false : true,
      icon: 'warning',
    });
  }

  public question(title: string, text?: string, timer?: number) {
    return this.show({
      title,
      text,
      timer,
      showConfirmButton: false,
      position: 'top-right',
      toast: true,
      showCloseButton: timer ? false : true,
      icon: 'question',
    });
  }

  private show(options: SweetAlertOptions) {
    return Swal.fire(options);
  }
}
