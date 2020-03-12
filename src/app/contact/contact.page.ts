import { Component, OnInit } from '@angular/core';
import { MenuController, Events } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private menu: MenuController, private events: Events) { }

  ngOnInit() {
    this.menu.enable(true);
    this.events.subscribe('menu:closed', () => {
      document.getElementById('menu').classList.value = 'menu';
    });
    this.events.subscribe('menu:open', () => {
      document.getElementById('menu').classList.value = 'menu open_menu';
    });
  }

}
