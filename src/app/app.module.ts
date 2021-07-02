import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../store/reducers/login.reducer';
import { postsReducer } from '../store/reducers/posts.reducer';
import { signupReducer } from '../store/reducers/signup.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PostsComponent, LoginComponent, SignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      login: loginReducer,
      signup: signupReducer,
      posts: postsReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
