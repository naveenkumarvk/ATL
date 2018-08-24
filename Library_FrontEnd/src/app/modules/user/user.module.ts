import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user.route';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuthGuard } from '../../services/auth-guard.service';
import { AssignBookComponent } from './assign-book/assign-book.component';
import { DialogModule } from 'primeng/dialog';
import { UsersBooksComponent } from './users-books/users-books.component';
import { ProfileComponent } from './profile/profile.component';
import { CardModule } from 'primeng/card';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RatingModule,
    DialogModule,
    CardModule
  ],
  declarations: [LoginComponent, UserDashboardComponent, UserHeaderComponent,
    UserNavbarComponent, UserHomeComponent, AssignBookComponent, UsersBooksComponent, ProfileComponent],
  providers: [AuthGuard]
})
export class UserModule { }
