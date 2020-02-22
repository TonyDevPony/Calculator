import { Component } from '@angular/core';

import { Platform, Events, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth.service/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private nav: NavController,
    private menu: MenuController,
    private events: Events,
    private authservice: AuthServiceService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    if(this.platform.is('android')){
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
    }
  }
  goSubscribe(){
    this.nav.navigateRoot('/home');
    this.menu.close();
  }
  goCalculator(){
    this.nav.navigateRoot('/calculator');
    this.menu.close();
  }
  MenuDidClose(){
    this.events.publish('menu:closed', ''); 
  }
  MenuDidOpen(){
    this.events.publish('menu:open', '');
  }
  logout(){
    this.authservice.logout();
    this.menu.enable(false);
  }
  
}
