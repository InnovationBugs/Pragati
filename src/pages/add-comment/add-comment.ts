import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Review } from '../../models/review.interface';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-add-comment',
  templateUrl: 'add-comment.html',
})
export class AddCommentPage {

  new = {} as Review;
  private ref = this.database.list<Review>('reviews');


  constructor(private database: AngularFireDatabase ,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  addReview(data : Review){
    this.ref.push(data);

    const alert = this.alertCtrl.create({
      title: 'Thanks !',
      subTitle: 'Your Review has been successfully posted.<br>Thanks for posting your review.',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }
  
}
