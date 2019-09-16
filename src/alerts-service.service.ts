import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsServiceService {

  msg: any;
  constructor() { }

  onNotify() {
    console.log('onNotify in alert service');
    window.alert('You will be notified when the product goes on sale');
  }
}
