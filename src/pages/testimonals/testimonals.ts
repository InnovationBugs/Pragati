import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AddCommentPage } from '../add-comment/add-comment';
import { Review } from '../../models/review.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@IonicPage()
@Component({
  selector: 'page-testimonals',
  templateUrl: 'testimonals.html',
})
export class TestimonalsPage {

  items: Observable<Review[]>;
  itemsRef: AngularFireList<any>;

  constructor(public database: AngularFireDatabase ,public navCtrl: NavController, public navParams: NavParams) {
   
   /* this.itemsRef = database.list<Review>('reviews');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
     )
   );

   console.log(this.items);*/

  }

  newComment(){
    this.navCtrl.push(AddCommentPage);
  }


}
