import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(){
        if(this.authService.loggedIn()){
            console.log('logged in');
            return true;
        }
        else{
            console.log('Not logged in');
            this.router.navigate(['/login']);
            return false;
        }
    }
}