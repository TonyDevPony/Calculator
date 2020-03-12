import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contract-modal',
  templateUrl: './contract-modal.page.html',
  styleUrls: ['./contract-modal.page.scss'],
})
export class ContractModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    document.querySelector('ion-checkbox').setAttribute('checked', 'true');
    
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
