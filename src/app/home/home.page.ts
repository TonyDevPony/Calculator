import { Component, OnInit } from '@angular/core';
import { MenuController, Events } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  constructor(
    private menu: MenuController, 
    private router: Router, 
    private events: Events,
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
}
