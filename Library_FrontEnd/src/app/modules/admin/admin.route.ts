import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { CheckBooksComponent } from './check-books/check-books.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'book', component: AdminBookComponent },
      { path: 'book/:id', component: AdminBookComponent },
      { path: 'books', component: AdminBooksComponent },
      { path: 'checkBooks', component: CheckBooksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


