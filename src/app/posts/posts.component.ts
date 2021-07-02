import { Component, OnInit } from '@angular/core';
import data from '../../data/post.json';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [
    './posts.component.css',
    '../../assets/css/style.css',
    '../../assets/css/responsive.css',
    '../../assets/css/owl.carousel.min.css',
    '../../assets/css/nice-select.css',
    '../../assets/css/meanmenu.css',
    '../../assets/css/fontawesome.css',
    '../../assets/css/default.css',
    '../../assets/css/bootstrap.min.css',
    '../../assets/css/all.min.css',
    '../../assets-home/css/style.css',
    '../../assets-home/css/responsive.css',
  ],
})
export class PostsComponent implements OnInit {
  public posts: any = [];

  public email = '';
  public password = '';

  constructor(
    public router: Router,
    public postsService: PostsService,
    public store: Store
  ) {
    // Please comment this line when data is comming from api
    if (data.posts && data.posts.length > 0) {
      this.posts = data.posts;
    }
  }

  ngOnInit(): void {
    this.postsService.getAll();
    // Here is how you get the response when api is called for posts
    this.store.pipe().subscribe((s: any) => {
      console.log(s);
    });
  }
}
