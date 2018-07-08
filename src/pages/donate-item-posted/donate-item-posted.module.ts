import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonateItemPostedPage } from './donate-item-posted';

@NgModule({
  declarations: [
    DonateItemPostedPage,
  ],
  imports: [
    IonicPageModule.forChild(DonateItemPostedPage),
  ],
})
export class DonateItemPostedPageModule {}
