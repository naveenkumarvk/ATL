import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ServerService } from './server.service';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UsersService {


    private API_KEY = 'AIzaSyB3LKom0_9eCUzufKb_z_rkSPg50lPBwAE';

    constructor(private http: HttpClient, private server: ServerService) { }


    users(body): Observable<any> {
        const url = this.server.SERVER_API_HOST + 'users/users';
        return this.http.post(url, body, httpOptions);
    }

    getProfile(): Observable<any> {
        const url = this.server.SERVER_API_HOST + 'users/users/' + localStorage.getItem('user_id');
        return this.http.get(url);
    }



}
