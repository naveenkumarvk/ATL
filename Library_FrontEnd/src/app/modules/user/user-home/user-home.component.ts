import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit, AfterViewInit {

  counts: {
    book: 0
  };

  userBookCounts;

  constructor(private router: Router, private admin: AdminService) {
    console.log('heresadsa');
    this.admin.getCounts().subscribe(books => {
      this.counts = books;
      this.admin.getUserBookCounts().subscribe(userBookCounts => {
        console.log('sadsada', userBookCounts);
        this.userBookCounts = userBookCounts;
      });
    });
  }

  ngOnInit() {

    this.admin.getCounts().subscribe(books => {
      this.counts = books;
    });
    this.getNotification();
  }

  getNotification() {
    this.admin.getNotification().subscribe(books => {
    });
  }

  ngAfterViewInit() {
    console.log('heresdsada inkit got');
  }

  navigate(url) {
    console.log('url', url);
    this.router.navigate([url]);
  }


}
