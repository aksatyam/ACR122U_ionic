import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
declare var KNfcAcr122U: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform) {

  }

  ionViewWillEnter() {

    if (this.platform.is('cordova')) {
      KNfcAcr122U.connect(res => {
        alert(JSON.stringify(res));
      }, err => {
        alert(JSON.stringify(err));
      });
    }
    else {
      console.log('Cordova not available');
    }
  }

}
