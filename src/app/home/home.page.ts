import { Component, OnInit } from '@angular/core';
import { MenuController, Events } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  constructor(private menu: MenuController, private http: HTTP, private events: Events) {}
  ngOnInit(){
    this.events.subscribe('menu:closed', () => {
      document.getElementById('menu').classList.value = 'menu';
    });
    this.events.subscribe('menu:open', () => {
      document.getElementById('menu').classList.value = 'menu open_menu';
    });
    this.data = {
      merchantAccount:"test_merch_n1",
      orderReference:"DH783023",
      merchantSecretKey: 'flk3409refn54t54t*FNJRET',
      merchantSignature:"",
      amount:1547.36,
      currency:"UAH",
      authCode:"541963",
      email:"client@mail.ua",
      phone:"380501234567",
      createdDate:12345678,
      processingDate:12345678,
      cardPan:"41****8217",
      cardType:"visa",
      issuerBankCountry:"980",
      issuerBankName:"Privatbank",
      recToken:"",
      transactionStatus:"Approved",
      reason:"ok",
      reasonCode:"1100",
      fee:0,
      paymentSystem:"card"
    }
  }
  pay(){
    this.http.post('https://secure.wayforpay.com/pay', this.data, {});
  }
}
