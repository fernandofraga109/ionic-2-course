import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  pages: Array<{component: any, title: string, icon: string}>;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: MenuTestPage, title: 'Menu Test', icon: 'menu'}
    ];
  }
  //Exemple action to class
  clicked() : void {
    console.log('I was clicked!');
  }

  openPage(page: any) : void {
    console.log('Opening '+page.title);
    this.rootPage = page.component;
  }
}
