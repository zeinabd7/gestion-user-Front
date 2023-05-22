import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate() {
        const user = this.authService.userValue;
        let role = this.authService.getRole()
        /* if (role ==='admin') {
            console.log('oka');
            // logged in so return true
            this.router.navigate(['users']);
            return true;
            
        } else {
            this.router.navigate(['/login']);
            return false;
        }  */
        if (role ) {
           // console.log('oka');
            // logged in so return true
            //this.router.navigate(['users']);
            return true;
            
        }  
            this.router.navigate(['/login']);
            return false;
    
    }
}