import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageRoutingModule } from './landing-page.route';



@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CarouselModule.forRoot(),
    ScrollToModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactusComponent,
    DashboardComponent
  ]
})
export class LandingPageModule { }
