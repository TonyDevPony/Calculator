import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  data: any;

  constructor(private menu: MenuController, private http: HTTP) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  login(){
    const {username, password} = this;
    this.data = {name: username, pass: password};
    try {
      this.http.post('http://wayforpaytest.had.su/test/login.php', this.data, {}).then(data => {
      console.log(data);
      });
    } catch(err){
      console.dir(err);
    }
  }


}
