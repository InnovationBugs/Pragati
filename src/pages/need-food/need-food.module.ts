import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeedFoodPage } from './need-food';

@NgModule({
  declarations: [
    NeedFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(NeedFoodPage),
  ],
})
export class NeedFoodPageModule {}
