import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AlertController } from 'ionic-angular';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the VolSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vol-signup',
  templateUrl: 'vol-signup.html',
})
export class VolSignupPage {

  user = {} as User;
  fullName : String;
  ngo : any;
  contact : any;
  verPassword : String;


  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showAlert(n: Number) {
    
    if (n == 1){

      const alert = this.alertCtrl.create({
        title: 'Alert !',
        subTitle: 'Please enter all the fields',
        buttons: ['OK']
      });
      alert.present();
     
    }
    else if(n == 2){
      const alert = this.alertCtrl.create({
        title: 'Alert !',
        subTitle: 'Both passwords do not match ',
        buttons: ['OK']
      });
      alert.present();
    }
    else if(n == 3){
      const alert = this.alertCtrl.create({
        title: 'Congrats !',
        subTitle: 'You are successfully registered as a volunteer, Please Login Again',
        buttons: ['OK']
      });
      alert.present();
    }
  }



  async register(user : User) {

  if(user.email==' ' || user.password== ' ' || this.fullName==' ' || this.ngo==' ' || this.contact==' ' || this.verPassword==' '){
    this.showAlert(1);
  }
  else if(user.password != this.verPassword){
    this.showAlert(2);
  }
  else{

    try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    this.showAlert(3);
    this.navCtrl.pop();
    }
    catch(e){
      console.log(e);
    }
  }
  }





}
