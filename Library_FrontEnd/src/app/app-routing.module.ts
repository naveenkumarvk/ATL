import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './modules/landing-page/landing-page.module#LandingPageModule',
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule'
  }, {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
