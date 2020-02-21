import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ASTWithSource } from '@angular/compiler';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpParams, HttpHeaders, } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = "";
  password: string = "";
  cpassword: string = "";
  data: any;

  constructor(private menu: MenuController, private router: Router, private http: HTTP, public alertController: AlertController) { }

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

  async register() {
    const { username, password, cpassword } = this;
    let errors = [];
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (username === '' || password === '' || cpassword === '') {
      this.AlertErr('<br/>Не все поля заполнены');
      return 0;
    }
    if (password !== cpassword) {
      errors.push('<br/>Пароли не совпадают');
    }
    if (reg.test(username) == false){
      errors.push('<br/>Введите корректный email');
    }
    if (password.length < 4) {
      errors.push('<br/>Пароль должен быть больше 4 символов');
    }
    if (errors.length != 0) {
      this.AlertErr(errors);
      return 0;
    } else {
      this.data = { name: username, pass: password };
      await this.http.post('http://wayforpaytest.had.su/test/register.php', this.data, {}).then(data => {
        console.log(data);
        if (data.data === '0'){
          this.AlertErr('Этот пользователь уже зарегистрирован');
        }
      });
    }
  }
  goLogin() {
    this.router.navigateByUrl('/login');
  }
}
