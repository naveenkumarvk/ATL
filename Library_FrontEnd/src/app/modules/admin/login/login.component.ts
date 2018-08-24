import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: String;
  password: String;

  constructor(private router: Router) { }

  login() {

    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['/admin/admin-dashboard']);
    } else {
      alert("wrong credentials")
    }

  }

}
