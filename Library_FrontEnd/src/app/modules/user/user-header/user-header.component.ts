import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  profile;

  constructor(private router: Router) { }

  ngOnInit() {

  }


  logout() {
    localStorage.removeItem('google_token');
    localStorage.removeItem('user_id');
    this.router.navigate(['/user']);
  }

  navigate(url) {
    this.router.navigate([url]);
  }

}
