import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-assign-book',
  templateUrl: './assign-book.component.html',
  styleUrls: ['./assign-book.component.scss']
})
export class AssignBookComponent implements OnInit {

  books;
  cols: any[];
   // for category drop down
  category;
  display = false;
  viewBook;
  assignModal = false;
  lastDate: Date;
  selectedBook;
  // limit
  userBookCountLimit: 0;
  limitBookDialog = false;

  constructor(private admin: AdminService, private router: Router) {

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
    ];

  }


  ngOnInit() {
    this.getBooks();
    this.category = [
      { label: 'All Category', value: null },
      { label: 'Computers', value: 'Computers' },
      { label: 'Adventure stories', value: 'Adventure stories' },
      { label: 'Juvenile Fiction', value: 'Juvenile Fiction' },
    ];
  }

  getBooks() {
    this.admin.getBooksToAssign().subscribe(books => {
      this.books = books;
      this.admin.getUserBookCounts().subscribe(userBookCounts => {
        console.log('sadsada', userBookCounts);
        this.userBookCountLimit = userBookCounts.user_book_count;
        console.log('sadsada', this.userBookCountLimit);
      });
    });

  }

  showDialog(data) {
    this.display = true;
    this.viewBook = data;
    console.log('data====>', this.viewBook);
  }


  selectBook(rowData) {
    console.log('this.userBookCountLimit', this.userBookCountLimit);
    if (this.userBookCountLimit < 5) {
      this.lastDate = moment().add(5, 'd').toDate();
      rowData.lastDate = this.lastDate;
      rowData.assignedTo = localStorage.getItem('user_id');
      rowData.assigned = true;
      this.selectedBook = rowData;
      this.assignModal = true;
    } else {
      this.limitDialog();
    }
  }

  limitDialog() {
    this.limitBookDialog = true;
  }


  assign() {
    this.assignModal = false;

    this.admin.assign(this.selectedBook).subscribe(data => {
      this.getBooks();
    },
      (error) => {
        alert('failed in assign Books');
      });

  }


}
