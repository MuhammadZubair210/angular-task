import { Component, OnInit } from '@angular/core';
import data from '../../data/post.json';
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
  constructor() {
    if (data.posts && data.posts.length > 0) {
      this.posts = data.posts;
    }
  }

  ngOnInit(): void {}
}
