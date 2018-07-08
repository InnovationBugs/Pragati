import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VolSignupPage } from '../vol-signup/vol-signup';
import { DashboardPage } from '../dashboard/dashboard';
import { AlertController } from 'ionic-angular';

import { User } from '../../models/user';
import { AngularFireAuthModule ,AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the VolLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vol-login',
  templateUrl: 'vol-login.html',
})
export class VolLoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  register() {
    this.navCtrl.push(VolSignupPage);
  }

  async login(user : User) {
    try{
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(result){
         this.navCtrl.setRoot(DashboardPage);
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Sorry !',
        subTitle: 'Unable to Authenticate',
        buttons: ['OK']
      });
      alert.present();
    }

    }
    catch(e){
      console.log(e);
    }
  }
}
