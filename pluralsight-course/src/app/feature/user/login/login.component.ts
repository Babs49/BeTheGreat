import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
  `]
})
export class LoginComponent {
  username: any;
  password: any;
  mouseoverLogin: any;

  constructor(private authService: AuthService, private router: Router) {

  }

  login(formValues: any): void {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }



  cancel(): void {
    this.router.navigate(['events']);
  }
}
