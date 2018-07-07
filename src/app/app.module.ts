import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { VolLoginPage } from '../pages/vol-login/vol-login';
import { VolSignupPage } from '../pages/vol-signup/vol-signup';
import { DonatePage } from '../pages/donate/donate';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NeedFoodPage } from '../pages/need-food/need-food'
import { ExtraFoodInfoPage } from '../pages/extra-food-info/extra-food-info';
import { DonateItemPostedPage } from '../pages/donate-item-posted/donate-item-posted';
import { TestimonalsPage } from '../pages/testimonals/testimonals';
import { AddCommentPage } from '../pages/add-comment/add-comment';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2'
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VolLoginPage,
    VolSignupPage,
    DonatePage,
    DashboardPage,
    NeedFoodPage,
    ExtraFoodInfoPage,
    DonateItemPostedPage,
    TestimonalsPage,
    AddCommentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VolLoginPage,
    VolSignupPage,
    DonatePage,
    DashboardPage,
    NeedFoodPage,
    ExtraFoodInfoPage,
    DonateItemPostedPage,
    TestimonalsPage,
    AddCommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ]
})
export class AppModule {}
