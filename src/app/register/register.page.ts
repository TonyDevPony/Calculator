import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ASTWithSource } from '@angular/compiler';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient,  } from '@angular/common/http';

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

  constructor (private menu: MenuController, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  async register(){
    const { username, password, cpassword } = this;
    this.data = {name: username, pass: password};
    this.http.post("http://wayforpaytest.had.su/test/test.php", this.data).subscribe((Response) => {
      console.log(Response);
    });
    

  }

}
