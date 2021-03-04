import { Component } from '@angular/core';
import { AuthService } from '../feature/user/core/auth.service';
import { MyUser } from '../feature/user/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924;
  `]
})
export class NavBarComponent {
  currentUser: MyUser;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.currentUser;
  }

  isAuthenticated(): boolean {
    this.currentUser = this.authService.currentUser;
    return this.authService.isAuthenticated();
  }
}

