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
  }
}
