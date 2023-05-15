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
        if (user && user.role==='admin') {
            // logged in so return true
            this.router.navigate(['users']);
            console.log('oka');
            return true;
            
        } else {
            
            this.router.navigate(['/dashboard/top-cards']);
        }
        return false;
    }
}