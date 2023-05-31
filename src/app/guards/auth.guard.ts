import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map, take } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    // canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot
    //   ): Observable<boolean> {
    //     return this.authService.isLoggedIn()      
    //       .pipe(
    //         take(1),                            
    //         map((isLoggedIn: boolean) => {      
    //           if (!isLoggedIn){
    //             this.router.navigate(['/login']);  
    //             return false;
    //           }
    //           return true;
    //         })
    //       )
    //   }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      let role=this.authService.getRole()
      if (role==="user") {
        alert("Vous ne pouvez pas acceder à cette page")
       // this.router.navigate(['/login'])
      } else {
        console.log("okkk");
        
      }
      return true;
    }
}