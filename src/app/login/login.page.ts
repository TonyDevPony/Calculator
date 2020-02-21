import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  data: any;

  constructor(private menu: MenuController, private http: HTTP, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  async AlertErr(message: any) {
    const alert = await this.alertController.create({
      header: 'Ошибка',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async login(){
    const {username, password} = this;
    this.data = {name: username, pass: password};
    await this.http.post('http://wayforpaytest.had.su/test/login.php', this.data, {}).then(data => {
      console.log(data);
      if(data.data != '0'){
        this.router.navigateByUrl('/home', this.data);
      } else{
        this.AlertErr('Пользователь не зарегестрирван');
      }
    });
  }


}
