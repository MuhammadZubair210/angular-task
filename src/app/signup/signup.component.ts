import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public username = '';
  public email = '';
  public password = '';

  constructor() {}

  submit() {
    let obj = {
      email: this.email,
      username: this.username,
      password: this.password,
    };
    console.log('---', obj);
  }

  ngOnInit(): void {}
}
