import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-estimation',
  templateUrl: 'estimation.html'
})
export class EstimationPage {
  estimation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      // If we navigated to this page, we will have an estimation available as a nav param
      this.estimation = navParams.get('estimation');
  }
}
