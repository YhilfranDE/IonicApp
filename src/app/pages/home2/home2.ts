import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../home/home';
import { Pagina1 } from '../pagina1/pagina1';
import { Pagina2 } from '../pagina2/pagina2';


@Component({
  templateUrl: 'home2.html'
})
export class Home2 {

  @ViewChild(Nav) nav: Nav;

  // luisjordan.net - Declaramos una nueva variable para controlar el texto mostrado
  text: string = '';

  rootPage: any = Pagina1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Pagina1', component: Pagina1 },
      { title: 'Pagina2', component: Pagina2 },
      { title: 'Books', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  rightMenuClick(text) {
    this.text = text;
  }
}