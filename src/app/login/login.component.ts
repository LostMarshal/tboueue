import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  account = [
    {
      username: 'user',
      password: 'user',
    },
    {
      username: 'user1',
      password: 'user1',
    },
  ];

  authen = {
    username: '',
    password: '',
    confirmPassword: '',
    isLogin: false
  };

  // ...

  constructor(private router: Router) {}

  login() {
    const foundUser = this.account.find(
      (user) =>
        user.username === this.authen.username &&
        user.password === this.authen.password
    );
    if (foundUser) {
      alert('Login Success');
      this.router.navigate(['/landing-page']);
    } else {
      alert('Login Fail');
    }
  }

  foundUser = this.account.find(
    (user) =>
      user.username === this.authen.username &&
      user.password === this.authen.password
  );

  register() {
    if (
      this.authen.username == '' ||
      this.authen.password == '' ||
      this.authen.confirmPassword == ''
      ) {
        alert('Please fill in the blank');
      }
    else if (this.authen.confirmPassword == this.authen.password) {
      if (this.authen.username.length < 6 || this.authen.password.length < 6) {
        alert('Username and Password must be at least 6 characters');
      } else if (
        this.foundUser &&
        this.foundUser.username == this.authen.username
      ) {
        alert('Username already exists');
      } else {
        alert('Register Success');
        this.account.push(this.authen);
        console.log(this.account);
      }
    } else {
      alert('Register Fail');
    }
  }
  
  LoginForm = true;

  showLoginForm() {
    this.LoginForm = true;
  }

  showRegisterForm() {
    this.LoginForm = false;
  }
}
