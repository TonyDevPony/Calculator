import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ASTWithSource } from '@angular/compiler';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpParams, HttpHeaders,  } from '@angular/common/http';

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

  constructor (private menu: MenuController, private router: Router, private http: HTTP) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  register() {
    const { username, password, cpassword } = this;
    if (password !== cpassword) {
      alert('Pass invalid');
    } else {
      this.data = {name: username, pass: password};
      try {
        this.http.post('http://wayforpaytest.had.su/test/register.php', this.data, {}).then(data => {
        console.log(data);
        });
      } catch (err) {
        console.dir(err);
      }
    }
  }
  goLogin() {
    this.router.navigateByUrl('/login');
  }
}
