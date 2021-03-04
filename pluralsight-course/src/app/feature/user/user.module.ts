import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { userRoutes } from './user.routes';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfilComponent,
    LoginComponent
  ]
})
export class UserModule { }
