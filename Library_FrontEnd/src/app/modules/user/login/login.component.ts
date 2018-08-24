import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';


declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  public auth2: any;

  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/user.phonenumbers.read',
    'https://www.googleapis.com/auth/plus.login'
  ].join(' ');

  constructor(private router: Router, private usersService: UsersService, private zone: NgZone) { }

  ngAfterViewInit() {
    this.googleInit();
  }


  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '969682619474-50omisdo9qte123tbuq3me8sudi0ft05.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const token = googleUser.getAuthResponse().access_token;
        const basicProfile = googleUser.getBasicProfile();
        localStorage.setItem('google_token', token);
        const userProfile = {
          name: basicProfile.getName(),
          email: basicProfile.getEmail(),
          imageUrl: basicProfile.getImageUrl()
        };
        this.usersService.users(userProfile).subscribe(
          (data) => {
            console.log('data', data);
            localStorage.setItem('user_id', data._id);
            this.zone.run(() => {
              this.router.navigateByUrl('/user/user-dashboard');
            });

          },
          (err) => {
            alert('User Creating Failed');
          }
        );
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }





}
