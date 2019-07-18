import {Component, OnInit} from '@angular/core';
import {UserSettingsI} from './settings';
import {NgForm, NgModel} from '@angular/forms';
import {DataService} from '../data/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  originalUserSettings: UserSettingsI = {
    name: 'Michael',
    birthDate: new Date(),
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'test'
  };

  subscriptionTypes: Observable<string[]>;
  userSettings: UserSettingsI = {...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  singleModel = "On";
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onHTTPError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('In onSubmit: ' + form.valid);
    this.dataService.postUserSettingsForm(this.userSettings)
      .subscribe(
      result => console.log('Succes: ', result),
          error => this.onHTTPError(error)
      );
  }

  onBlur(field: NgModel) {
    console.log('In onBlur: ', field.valid);
  }
}
