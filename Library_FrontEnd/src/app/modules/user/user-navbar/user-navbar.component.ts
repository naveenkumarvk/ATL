import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(url) {
    const navigate = '/' + url;
    this.router.navigate([navigate]);
  }

}
