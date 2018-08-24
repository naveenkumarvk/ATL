import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoginComponent } from './login/login.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AdminRoutingModule } from './admin.route';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { AdminService } from '../../services/admin.service';
import { RouterModule } from '@angular/router';
import { CheckBooksComponent } from './check-books/check-books.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    RatingModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [AdminService],
  declarations: [LoginComponent, AdminDashboardComponent, AdminHeaderComponent,
    AdminNavbarComponent, AdminHomeComponent, AdminBooksComponent, AdminBookComponent, CheckBooksComponent]

})
export class AdminModule { }
