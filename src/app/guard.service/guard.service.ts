import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthServiceService } from '../auth.service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor( 
    private authservice: AuthServiceService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    if(!this.authservice.getUserId()){
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

}
