import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Needy } from '../../models/needy.interface';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-need-food',
  templateUrl: 'need-food.html',
})
export class NeedFoodPage {

  poor = {} as Needy;
  private ref = this.database.list<Needy>('needy-list');


  constructor(private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  showInfo(){
    const alert = this.alertCtrl.create({
    title: 'Help !',
    subTitle: 'We value your hunger and wish that not a single perosn goes to bed without food. Almighty will bless you if you are using this service to cater a needy.',
    buttons: ['OK']
  });
  alert.present();
}

order(data : Needy) {
  this.ref.push(data);

  const loader = this.loadingCtrl.create({
    content: "Sending Order...",
    duration: 750
  });
  loader.present();

  //Alert Posting

  const alert = this.alertCtrl.create({
    title: 'Congratulations !',
    subTitle: 'Your Order has been sent sucessfully to our servers.<br><b>You will be notified via SMS if your order is proceeded by any volunteer.</b>',
    buttons: ['OK']
  });
  alert.present();

  this.navCtrl.pop();


}

}
