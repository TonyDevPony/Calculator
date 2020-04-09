import { Component, OnInit } from '@angular/core';
import { MenuController, Events, ModalController, AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ContractModalPage } from '../contract-modal/contract-modal.page';
import { HTTP } from '@ionic-native/http/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AuthServiceService } from '../auth.service/auth-service.service';


declare let window: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  checkbox: boolean;
  post_data = { 
   data: 'eyJwdWJsaWNfa2V5Ijoic2FuZGJveF9pNDY5NzY2ODExMDYiLCJ2ZXJzaW9uIjoiMyIsImFjdGlvbiI6InN1YnNjcmliZSIsImFtb3VudCI6IjMiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoidGVzdCIsIm9yZGVyX2lkIjoiMDAwMDAxIn0=',
   signature: 'CcUBocGlG8gXXvzy7F100Ib3fss=',
  };
  page_content = `<form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
                    <input type="hidden" name="data" value="${this.post_data.data}"/>
                    <input type="hidden" name="signature" value="${this.post_data.signature}"/>

                  </form>`;
  pageContentUrl = 'data:text/html;base64,' + btoa(this.page_content);
  // <input type="hidden" src="//static.liqpay.ua/buttons/p1ru.radius.png"/>
  constructor(
    private menu: MenuController,
    private router: Router,
    private events: Events,
    public modalController: ModalController,
    public alertController: AlertController,
    private nav: NavController,
    private http: HTTP,
    private userInf: AuthServiceService
    //private iab: InAppBrowser
  ) {

  }

  ngOnInit(){
    this.menu.enable(true);
    this.events.subscribe('menu:closed', () => {
      document.getElementById('menu').classList.value = 'menu';
    });
    this.events.subscribe('menu:open', () => {
      document.getElementById('menu').classList.value = 'menu open_menu';
    });
  }



  async AlertErr(message: any) {
    const alert = await this.alertController.create({
      header: 'Ошибка',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: ContractModalPage
    });
    return await modal.present();
  }
  pay(checkbox) {
    if (checkbox) {

      let inAppBrowser = window.cordova.InAppBrowser.open(this.pageContentUrl, '_blank');
   
      inAppBrowser.addEventListener('loadstop', function() {
        inAppBrowser.executeScript({ code: "var form = document.querySelector('form'); form.submit();" });
      });
      

      return 1;
    } else {
      this.AlertErr('Ознакомтесь с договором!!!');
    }
  }
  goContact() {
    this.nav.navigateRoot('/contact');
  }
}
