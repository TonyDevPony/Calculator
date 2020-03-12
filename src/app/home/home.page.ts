import { Component, OnInit } from '@angular/core';
import { MenuController, Events, ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ContractModalPage } from '../contract-modal/contract-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  checkbox: boolean;
  constructor(
    private menu: MenuController, 
    private router: Router, 
    private events: Events,
    public modalController: ModalController,
    public alertController: AlertController             
  ) {}

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
      message: message,
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
      // перенаправить на платежную систему
      return 1;
    } else {
      this.AlertErr('Ознакомтесь с договором!!!');
    }
  }
}
