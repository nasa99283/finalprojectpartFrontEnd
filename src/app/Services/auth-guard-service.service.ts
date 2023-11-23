import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
 
  canActivate(): boolean {
    // Check if user is not authenticated
    if (!this.auth.isAuthenticated()) {
      // redirect to login
      this.router.navigate(["login"]);
      return false;
    }
    // Access granted
    return true;
  }
}