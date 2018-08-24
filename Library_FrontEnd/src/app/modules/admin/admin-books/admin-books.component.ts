import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss']
})
export class AdminBooksComponent implements OnInit {

  books;
  cols: any[];


  constructor(private admin: AdminService, private router: Router) {

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'NoOfCopies', header: 'Copies' },
      { field: 'isbn', header: 'ISBN' }
    ];

  }


  ngOnInit() {
    this.admin.getBooks().subscribe(books => {
      this.books = books;
      console.log('books', this.books);
    });

  }

  selectedBook(rowData) {

    console.log('rowData', rowData);
    this.router.navigate(['/admin/admin-dashboard/book/' + rowData._id]);

  }

}
