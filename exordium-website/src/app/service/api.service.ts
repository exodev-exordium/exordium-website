import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

// Variables
import { API } from './shared/api';
import { User } from './shared/user';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private endpoint = new API().endpoint;

    // http options
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor (private http: HttpClient) { }

    // Extract the data
    private extractData (res: Response) {
        let body = res;
        return body || { };
    }

}