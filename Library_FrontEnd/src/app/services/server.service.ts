import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ServerService {

    public GOOGLE_API_KEY = 'AIzaSyB3LKom0_9eCUzufKb_z_rkSPg50lPBwAE';
   // public SERVER_API_HOST = 'http://ec2-174-129-82-34.compute-1.amazonaws.com:3000/api/';
    public SERVER_API_HOST = 'http://localhost:3000/api/';

}
