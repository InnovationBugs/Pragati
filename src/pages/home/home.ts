import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { VolLoginPage } from '../vol-login/vol-login';
import { DonatePage } from '../donate/donate';
import { NeedFoodPage } from '../need-food/need-food';
import { TestimonalsPage } from '../testimonals/testimonals';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  updates=2;
  url : string = 'https://pragati-app.firebaseapp.com';

  e1 = 'Navigation';
  e2 = 'HOME';
  e3 = 'NEED FOOD ?';
  e4 = 'WISH TO VOLUNTEER ?';
  e5 = 'WISH TO DONATE ?';
  e6 = 'TESTIMONIALS';
  e7 = 'Latest Updates';


  h1 = 'सूची';
  h2 = 'होम';
  h3 = 'खाना चाहिए ?';
  h4 = 'मदद करने के लिए इच्छा?';
  h5 = 'दान करने के लिए इच्छा है?';
  h6 = 'प्रशंसापत्र';
  h7 = 'नवीनतम अपडेट';


  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {

  }

  openSettings() {
    
  }

  toEng() {
    this.e1 = 'Navigation';
  this.e2 = 'HOME';
  this.e3 = 'NEED FOOD ?';
  this.e4 = 'WISH TO VOLUNTEER ?';
  this.e5 = 'WISH TO DONATE ?';
  this.e6 = 'TESTIMONIALS';
  this.e7 = 'Latest Updates';


  }

  toHin() {
    this.e1= this.h1;
    this.e2= this.h2;
    this.e3= this.h3;
    this.e4= this.h4;
    this.e5= this.h5;
    this.e6= this.h6;
    this.e7= this.h7;
  }

  openHome() {
    const browser = this.inAppBrowser.create(this.url,'_self',);
  }

  openVol() {
    this.navCtrl.push(VolLoginPage);
  }

  donate() {
    this.navCtrl.push(DonatePage);
  }

  needFood() {
    this.navCtrl.push(NeedFoodPage);
  }

  openTestimonial() {
    this.navCtrl.push(TestimonalsPage);
  }
}
