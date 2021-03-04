import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  templateUrl: './profil.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfilComponent implements OnInit {
  fb: FormBuilder = new FormBuilder();
  firstName!: FormControl;
  lastName!: FormControl;
  profileForm: FormGroup = new FormGroup({firstName : new FormControl(), lastName : new FormControl()});

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm(): void{
    this.profileForm = this.fb.group({
      firstName : new FormControl(this.authService.currentUser.firstName, Validators.required),
      lastName : new FormControl(this.authService.currentUser.lastName, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  saveProfile(formValues: any): void {
    if (!!this.profileForm && this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  validateFirstName(): boolean | undefined{
    return !!this.firstName ? this.firstName.valid || this.firstName.untouched : undefined;
  }

  validateLastName(): boolean | undefined {
    return !!this.lastName ? this.lastName.valid || this.lastName.untouched :  undefined ;
  }
  cancel(): void{
    this.router.navigate(['events']);
  }
}
