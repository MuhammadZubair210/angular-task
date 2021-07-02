import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private store: Store) {}

  login() {
    this.http
      .get(`http://affizia.com/community.member.login.php`)
      .subscribe((response) => {
        this.store.dispatch({
          type: '[Login Component] Login',
          payload: response,
        });
      });
  }
}
