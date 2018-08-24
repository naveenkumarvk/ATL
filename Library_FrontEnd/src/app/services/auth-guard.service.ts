import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private http: HttpClient) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard#canActivate called');

        if (localStorage.getItem('user_id')) {

            console.log('dsadsa');
            return true;
        }
        this.router.navigate(['/user']);
        return false;
    }
    // return true ;
    // if (localStorage.getItem('user_id') != null) {
    // this.http.get("https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=" +
    // localStorage.getItem('google_token')).subscribe(
    //     data => {
    //         console.log("data", next)
    //        // return true;
    //         this.router.navigate(['user/user-dashboard'])
    //     },
    //     error => {
    //         this.router.navigate(['/user']);
    //         console.log("error", error)
    //     }
    // )
    //     return true
    // }else{
    //     console.log("localStorage.getItem('user_id')",localStorage.getItem('user_id'))
    //     this.router.navigate["/user"]
    //     return false
    // }

}
