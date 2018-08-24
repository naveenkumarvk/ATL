import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { toDate } from '../../../../../node_modules/@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-check-books',
  templateUrl: './check-books.component.html',
  styleUrls: ['./check-books.component.scss']
})
export class CheckBooksComponent implements OnInit {

  books;
  cols: any[];

  constructor(private admin: AdminService, private router: Router) {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'lastDate', header: 'Last Date' },
      { field: 'assignedTo', header: 'Email' }
    ];
  }

  ngOnInit() {
    this.admin.getBooksForAdmin().subscribe(books => {
      this.books = books;
      console.log('books', this.books);
    });

  }

  checkDate(date) {
    const dateObj = new Date(date);
    const momentObj = moment(dateObj);
    const today = moment(new Date());
    const day_difference = momentObj.diff(today, 'days');
    if (day_difference >= 3) {
      return 'green';
    } else {
      return 'red';
    }
  }


}
