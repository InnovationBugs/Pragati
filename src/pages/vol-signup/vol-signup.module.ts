import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolSignupPage } from './vol-signup';

@NgModule({
  declarations: [
    VolSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(VolSignupPage),
  ],
})
export class VolSignupPageModule {}
