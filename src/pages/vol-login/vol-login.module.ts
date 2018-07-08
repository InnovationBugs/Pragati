import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolLoginPage } from './vol-login';

@NgModule({
  declarations: [
    VolLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(VolLoginPage),
  ],
})
export class VolLoginPageModule {}
