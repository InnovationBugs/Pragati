import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Donate } from '../../models/donate.interface';


@IonicPage()
@Component({
  selector: 'page-donate-item-posted',
  templateUrl: 'donate-item-posted.html',
})
export class DonateItemPostedPage {

  temp ={} as Donate;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.temp = this.navParams.get('food');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateItemPostedPage');
  }

  goHome(){
    this.navCtrl.push(HomePage);
  }

  addNew(){
    this.navCtrl.pop();
  }
}
