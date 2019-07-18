import { Injectable } from '@angular/core';
import {UserSettingsI} from '../settings/settings';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  postUserSettingsForm(userSettings: UserSettingsI): Observable<any> {
    return this.http.post('https://putsreq.com/4LLmOIg9RsLU2Sf02mj6', userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Weekly', 'Monthly', 'Yearly', 'LifeTime']);
  }
}
