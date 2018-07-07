import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  e1='Welcome to Pragati App!';
  e2='What does the App do?';
  e3='What do we expect?';
  e4='Ready to Experience the Change?';
  ed1='<b>Pragati App</b> is particularly made to for NGO\'s to communicate with Needy community to help them aquire their daily food.';
  ed2='The App collects information of the extra food stored with people, so that NGO\'s can send them to the needy community.';
  ed3='The <b>Pragati App</b> was build to empower development in India. Also the needy community must get required amount of food.';

  h1='प्रगति ऐप में आपका स्वागत है!';
  h2='ऐप क्या करता है?';
  h3='हम क्या उम्मीद करते हैं?';
  h4='परिवर्तन का अनुभव करने के लिए तैयार हैं?';
  hd1='<b>प्रगति ऐप</b> विशेष रूप से एनजीओ के लिए नेडी समुदाय के साथ संवाद करने के लिए बनाया जाता है ताकि वे अपने दैनिक भोजन को प्राप्त कर सकें।';
  hd2='ऐप लोगों के साथ संग्रहीत अतिरिक्त भोजन की जानकारी एकत्र करता है, ताकि एनजीओ उन्हें जरूरतमंद समुदाय को भेज सकें।';
  hd3='<b>प्रगति ऐप</b> भारत में विकास को सशक्त बनाने के लिए बनाया गया था। इसके अलावा जरूरतमंद समुदाय को आवश्यक मात्रा में भोजन मिलना चाहिए।';


  slides = [
    {
      title: this.e1,
      description: this.ed1,
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: this.e2,
      description: this.ed2,
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: this.e3,
      description: this.ed3,
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
];

  constructor(public navCtrl: NavController) {

  }

  toEng() {

    this.e1='Welcome to Pragati App!';
  this.e2='What does the App do?';
  this.e3='What do we expect?';
  this.e4='Ready to Experience the Change?';
  this.ed1='<b>Pragati App</b> is particularly made to for NGO\'s to communicate with Needy community to help them aquire their daily food.';
  this.ed2='The App collects information of the extra food stored with people, so that NGO\'s can send them to the needy community.';
  this.ed3='The <b>Pragati App</b> was build to empower development in India. Also the needy community must get required amount of food.';

  }
  
  toHin() {
    this.e1 = this.h1;
    this.e2=this.h2;
    this.e3=this.h3;
    this.e4=this.h4;
    this.ed1=this.hd1;
    this.ed2=this.hd2;
    this.ed3=this.hd3;

  }
}
