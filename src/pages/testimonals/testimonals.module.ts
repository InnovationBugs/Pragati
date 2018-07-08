import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestimonalsPage } from './testimonals';

@NgModule({
  declarations: [
    TestimonalsPage,
  ],
  imports: [
    IonicPageModule.forChild(TestimonalsPage),
  ],
})
export class TestimonalsPageModule {}
