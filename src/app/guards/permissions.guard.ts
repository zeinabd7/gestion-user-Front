import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
) { }
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      /*let role = this.authService.getRole()
      console.log('the role permission===',role)
      if (role=="admin") {  
        return true;      
      }
      return false;
      }*/
      let role = this.authService.getRole()
      console.log('the role permission===',role);
      let order: boolean
      role == "user"?order = true : order = true
      return order
      
    }
    
   
  }
  
