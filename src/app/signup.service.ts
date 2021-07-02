import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient, private store: Store) {}

  signup(obj: any) {
    this.http
      .get(
        `http://affizia.com/community.create.php`,
        { responseType: 'text' }
      )
      .subscribe((response) => {
        this.store.dispatch({
          type: '[Signup Component] Signup',
          payload: response,
        });
      });
  }
}
