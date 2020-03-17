import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth.service/auth-service.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService implements CanActivate {
  constructor(
    private authservice: AuthServiceService,
    private router: Router,
    public alertController: AlertController
  ) { }
  async AlertErr(message: any) {
    const alert = await this.alertController.create({
      header: 'Ошибка',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(typeof(this.authservice.getUserId()));
    const message = 'Для использования калькулятора оформите подписку';
    // tslint:disable-next-line: triple-equals
    if (this.authservice.getUserId() !== '4') {
      this.AlertErr(message);
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }

}
