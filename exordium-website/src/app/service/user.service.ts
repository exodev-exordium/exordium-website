import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

// Variables
import { API } from './shared/api';
import { User } from './shared/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private endpoint = new API().endpoint;
    private headers = new API().headers;

    constructor (
        private http: HttpClient,
        public router: Router
    ) { }

    // Handle Errors
    handleError (error: HttpErrorResponse) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        } else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        return throwError(msg);
    }

    // User Data
    getUserData (): Observable<any> {
        let api = `${this.endpoint}/user/me`;
        return this.http.get(api, { headers: this.headers }).pipe(
            map(
                (res: Response) => {
                    return res || {};
                }
            ),
            catchError(this.handleError)
        )
    }
}