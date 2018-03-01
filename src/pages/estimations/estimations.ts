import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EstimationPage} from "../estimation/estimation";

@Component({
  selector: 'page-estimations',
  templateUrl: 'estimations.html'
})
export class EstimationsPage {
  estimations: Array<{ value: number }>;

  constructor(public navCtrl: NavController) {
    this.estimations = [];
    for (let i = 0.25; i <= 3; i += 0.25) {
      this.estimations.push({value: i});
    }
  }

  estimationTapped(event, estimation) {
    this.navCtrl.push(EstimationPage, {
      estimation: estimation
    });
  }

}
