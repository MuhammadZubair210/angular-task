import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';

  constructor(public router:Router) {}

  submit() {
    let obj = {
      email: this.email,
      password: this.password,
    };
    console.log('---', obj);

    this.router.navigate(['/posts']);

  }

  ngOnInit(): void {}
}
