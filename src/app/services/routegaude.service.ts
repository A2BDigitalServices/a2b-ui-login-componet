import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { RestapiService } from '../restapi.service';
import { TempauthService } from './tempauth.service';

@Injectable({
  providedIn: 'root'
})
export class RoutegaudeService implements CanActivate{

  constructor(private router:Router,private service:RestapiService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.service.isUserLoggedIn())
      return true;

    this.router.navigate(['/login']);
    return false;
    
  }
 
}
