import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Donate } from '../../models/donate.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { DonateItemPostedPage } from '../donate-item-posted/donate-item-posted'


@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {

  food = {} as Donate;
  //donate$ : FirebaseListObservable<Donate[]>;
  private ref = this.database.list<Donate>('donate-list');

  constructor(private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    //this.donate$ = this.database.list<Donate>('Donate-list');
  }

  showInfo(){
      const alert = this.alertCtrl.create({
      title: 'Donate',
      subTitle: 'We, the <b>Pragati App</b> Team salute your heart for this noble cause. We wish you good luck & good fortune. <b>We will be also sending you a certificate of Appreciation for this Noble Deed.</b>',
      buttons: ['OK']
    });
    alert.present();
  }

  donate(food : Donate) {
    this.ref.push(food);

    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();

    

    this.navCtrl.setRoot(DonateItemPostedPage, {
      'food':food
    });

    
  }


  

}
