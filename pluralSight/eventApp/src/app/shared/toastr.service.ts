import {InjectionToken} from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<ToastrI>('toastr');

export interface ToastrI {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;

}
