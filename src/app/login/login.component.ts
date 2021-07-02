import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';

  constructor(
    public router: Router,
    public loginService: LoginService,
    public store: Store
  ) {}

  submit() {
    // let obj = {
    //   email: this.email,
    //   password: this.password,
    // };
    this.loginService.login();
  }

  ngOnInit(): void {
    this.store.pipe().subscribe((s: any) => {
      console.log(s)
      if (s.login.loggedIn) {
        this.router.navigate(['/posts']);
      }
    });
  }
}
