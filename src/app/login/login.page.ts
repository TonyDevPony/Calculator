import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  async login(){
    const {username, password} = this;
    try{
      
    }catch(err){
      console.dir(err);
      if(err.code === "auth/user-not-found"){
        console.log('User not found');
      }
    }
  }


}
