import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  registerForm: FormGroup;
  nameInput: FormControl;
  emailInput: FormControl;
  passwordInput: FormControl;

  
  constructor(private router: Router, private authService: AuthService) {
    this.nameInput = new FormControl("", [Validators.required]);
    this.emailInput = new FormControl("", [
      Validators.required,
      Validators.email,
    ]);
    this.passwordInput = new FormControl("", [Validators.required]);
    this.registerForm = new FormGroup({
      name: this.nameInput,
      email: this.emailInput,
      password: this.passwordInput,
    });
  }
 
  ngOnInit(): void {}
 
  signup() {
    this.authService
      .register(
        this.registerForm.value.name,
        this.registerForm.value.email,
        this.registerForm.value.password
      )
      .subscribe({
        next: (user: User) => {
          alert("Register successful");
          console.log(user);
 
          // Redirect to login page
          this.router.navigate(["/login"]);
        },
        error: (error: any) => {
          alert("Register failed");
          console.log(error);
        },
      });
  }
}
