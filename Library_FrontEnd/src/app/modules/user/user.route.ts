import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AssignBookComponent } from './assign-book/assign-book.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersBooksComponent } from './users-books/users-books.component';
import { AuthGuard } from '../../services/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: UserHomeComponent },
      { path: 'assign', component: AssignBookComponent },
      { path: 'books', component: UsersBooksComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }


