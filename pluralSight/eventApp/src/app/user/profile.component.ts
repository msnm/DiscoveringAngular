import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float:right; color:#bd362f; padding-left: 10px;}
    .error input { background: #bd362f;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error ::-ms-input-placeholder{ color: #999;}


  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[A-Z]{1}.*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup( {
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

}
