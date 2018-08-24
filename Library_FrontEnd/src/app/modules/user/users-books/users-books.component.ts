import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { moment } from '../../../../../node_modules/ngx-bootstrap/chronos/test/chain';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-users-books',
  templateUrl: './users-books.component.html',
  styleUrls: ['./users-books.component.scss']
})
export class UsersBooksComponent implements OnInit {


  cols: any[];
  books;
  checkSubscribeStatus: Boolean = false;


  // renew
  renewModal = false;
  renewData;
  lastDate: Date;

  readonly VAPID_PUBLIC_KEY = 'BKuJVZKcfjDNG4MYMTPFBySCcOnmVB7wMGAuUO9WPZKypY2P2hSvfnRUXH1DMJWA5oKJ7sH1V1nNrQliBQufr00';

  constructor(private admin: AdminService, private router: Router, private swPush: SwPush) {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'lastDate', header: 'Last Date' },
    ];
  }

  ngOnInit() {
    this.getBooks();
    this.checkSubscribe();
  }


  checkSubscribe() {
    this.admin.checkSubscribe(localStorage.getItem('user_id')).subscribe(subscribe => {
      if (subscribe != null && subscribe.length === 0) {
        this.checkSubscribeStatus = true;
      }
    });
  }


  getNotification() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        const object = {
          user_id: localStorage.getItem('user_id'),
          name: sub
        };
        this.admin.saveNotication(object).subscribe(data => {
          alert('Notification saved');
        });
      })
      .catch(err => console.error('Could not subscribe to notifications', err));

  }


  getBooks() {
    this.admin.getBooksByUserId(localStorage.getItem('user_id')).subscribe(books => {
      this.books = books;
    });
  }

  return(data) {
    data.assignedTo = null;
    data.assigned = false;

    console.log('data', data);
    this.admin.assign(data).subscribe(dataFor => {
      this.getBooks();
    },
      (error) => {
        alert('failed in assign Books');
        this.books = [];
      });
  }

  renew(data) {
    console.log('data', data);
    data.lastDate = moment(data.lastDate).add(5, 'd').toDate();
    this.lastDate = data.lastDate;
    this.renewModal = true;
    this.renewData = data;
  }

  assign() {
    this.renewModal = false;
    this.admin.assign(this.renewData).subscribe(data => {
      this.getBooks();
    },
      (error) => {
        alert('failed in assign Books');
      });
  }

}
