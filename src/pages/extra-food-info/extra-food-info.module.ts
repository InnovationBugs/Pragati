import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtraFoodInfoPage } from './extra-food-info';

@NgModule({
  declarations: [
    ExtraFoodInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ExtraFoodInfoPage),
  ],
})
export class ExtraFoodInfoPageModule {}
