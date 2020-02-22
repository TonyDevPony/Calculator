import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  
  private userId: null;
  private userInfo: any; 

  constructor(private nav: NavController) {
  }

  setUser(userObj: string){
    this.userInfo = JSON.parse(userObj)
  }

  getUser(){
    return this.userInfo;
  }

  setUserId(){
    const jsonUser = this.getUser();
    this.userId = jsonUser.id;
  }

  getUserId(){
    return this.userId;
  }

  logout(){
    this.userId = null;
    this.userInfo = '';
    this.nav.navigateRoot('/login');
  }
}
