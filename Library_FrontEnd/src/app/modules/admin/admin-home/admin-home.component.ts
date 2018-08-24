import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  counts: {
    book: 0
  };

  constructor(private router: Router, private admin: AdminService) { }

  ngOnInit() {

    this.admin.getCounts().subscribe(books => {
      this.counts = books;
    });

  }

  navigate(url) {
    console.log('url', url);
    this.router.navigate(['/admin/admin-dashboard/books']);
  }

}
