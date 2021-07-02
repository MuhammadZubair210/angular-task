import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public username = '';
  public email = '';
  public password = '';

  constructor(
    public router: Router,
    public loginService: SignupService,
    public store: Store
  ) {}

  submit() {
    let obj = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    this.loginService.signup(obj);
  }

  ngOnInit(): void {
    this.store.pipe().subscribe((s: any) => {
      if (s.signup.signedUp) {
        this.router.navigate(['/login']);
      }
    });
  }
}
