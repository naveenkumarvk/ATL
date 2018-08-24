import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ServerService } from './server.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AdminService {


  private API_KEY = 'AIzaSyB3LKom0_9eCUzufKb_z_rkSPg50lPBwAE';

  constructor(private http: HttpClient, private server: ServerService) { }

  getBooksDetailsThroughIsbn(isbn): Observable<any> {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn+' + isbn + '&key' + this.API_KEY;
    return this.http.get(url);
  }

  getBooksById(id): Observable<any> {
    const url = this.server.SERVER_API_HOST + 'books/books/' + id;
    return this.http.get(url);
  }

  getBooksByUserId(id): Observable<any> {
    const url = this.server.SERVER_API_HOST + 'books/getAssignedBooks/' + id;
    return this.http.get(url);
  }
  checkSubscribe(id): Observable<any> {
    const url = this.server.SERVER_API_HOST + 'books/checkSubscribeStatus/' + id;
    return this.http.get(url);
  }

  saveBooks(body): Observable<any> {
    const url = this.server.SERVER_API_HOST + 'books/books';
    return this.http.post(url, body, httpOptions);
  }

  saveNotication(body): Observable<any> {
    const url = this.server.SERVER_API_HOST + 'books/notification';
    return this.http.post(url, body, httpOptions);
  }


  updateBooks(body): Observable<any> {
    const url = this.server.SERVER_API_HOST + 'books/books';
    return this.http.put(url, body, httpOptions);
  }

  getBooks(): Observable<any> {
    const url = this.server.SERVER_API_HOST + 'books/books';
    return this.http.get(url);
  }

  getBooksForAdmin(): Observable<any> {
    const url = this.server.SERVER_API_HOST + 'books/getAssignedBooksForAdmin';
    return this.http.get(url);
  }
  getBooksToAssign(): Observable<any> {
    const url = this.server.SERVER_API_HOST + 'books/getBooksForAssign';
    return this.http.get(url);
  }

  getCounts(): Observable<any> {
    console.log('calling coun toai');
    const url = this.server.SERVER_API_HOST + 'books/counts/';
    return this.http.get(url);
  }

  getNotification(): Observable<any> {
    console.log('calling coun toai');
    const url = this.server.SERVER_API_HOST + 'books/getNotification/';
    return this.http.get(url);
  }


  getUserBookCounts(): Observable<any> {
    console.log('calling coun toai');
    const url = this.server.SERVER_API_HOST + 'books/getBooksCountByUserId/' + localStorage.getItem('user_id');
    return this.http.get(url);
  }



  assign(body): Observable<any> {
    const url = this.server.SERVER_API_HOST + 'books/updateBookToAssign';
    return this.http.post(url, body, httpOptions);
  }


}
