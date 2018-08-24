import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.scss']
})
export class AdminBookComponent implements OnInit {

  book: FormGroup;
  edit = true;

  max = 5;

  isReadonly = true;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private admin: AdminService, private router: Router) {

  }

  ngOnInit() {

    this.intializeForm();

    const bookId = this.route.snapshot.paramMap.get('id');

    if (bookId != null) {
      console.log('isnide update flow');
      this.admin.getBooksById(bookId).subscribe(book => {

        this.book.disable();
        this.book.controls['NoOfCopies'].enable();

        this.book.setValue({
          name: book.title,
          title: book.title,
          description: book.description,
          imageUrl: book.imageUrl,
          authors: book.authors,
          category: book.category,
          isbn: book.isbn,
          rating: 3,
          NoOfCopies: book.NoOfCopies
        });
        this.edit = false;
      });
    }
  }

  intializeForm() {
    this.book = this.formBuilder.group({
      name: ['', Validators.required],
      title: [''],
      description: [''],
      imageUrl: [''],
      authors: [''],
      isbn: [''],
      category: [''],
      rating: [''],
      NoOfCopies: ['']
    });
  }

  onCreateBook() {

    if (this.edit) {
      console.log('save vooksda', this.book.value);
      this.admin.saveBooks(this.book.value).subscribe(
        (data) => {
          this.router.navigate(['/admin/admin-dashboard']);
        },
        (err) => {
          alert('ISBN ALREADY FOUND');
        }
      );
    } else {
      console.log('uare in edi');
      const update_book = this.book.value;
      update_book._id = this.route.snapshot.paramMap.get('id');

      this.admin.updateBooks(update_book).subscribe(
        (data) => {
          this.router.navigate(['/admin/admin-dashboard']);
        },
        (err) => {
          alert('ISBN ALREADY FOUND');
        }
      );
    }

  }

  getISBN() {
    console.log('this', this.book);
    console.log('book', this.book.value);
    this.admin.getBooksDetailsThroughIsbn(this.book.value.isbn).subscribe(books => {
      const book = books.items[0];
      console.log('book', book);
      this.book.setValue({
        name: (book['volumeInfo']['title']) ? (book['volumeInfo']['title']) : '',
        title: (book['volumeInfo']['title']) ? (book['volumeInfo']['title']) : '',
        description: (book['volumeInfo']['description']) ? (book['volumeInfo']['description']) : '',
        imageUrl: (book['volumeInfo']['imageLinks']['thumbnail']) ? (book['volumeInfo']['imageLinks']['thumbnail']) : '',
        authors: (book['volumeInfo']['authors']) ? (book['volumeInfo']['authors']).toString() : '',
        category: (book['volumeInfo']['categories']) ? (book['volumeInfo']['categories']) : '',
        isbn: this.book.value.isbn,
        rating: 3,
        NoOfCopies: 1
      });
    });
  }

}
