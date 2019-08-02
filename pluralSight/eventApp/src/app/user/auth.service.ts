import {Injectable} from '@angular/core';
import {UserI} from './user.model';

@Injectable()
export class AuthService {

  currentUser: UserI;

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
