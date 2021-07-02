import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient, private store: Store) {}

  getAll() {
    this.http
      .get(`http://affizia.com/community.post.php`, { responseType: 'text' })
      .subscribe((response: any) => {
        let res = response.trim();
        console.log(res);
        this.store.dispatch({
          type: '[Posts Component] Post',
          payload: response,
        });
      });
  }
}
