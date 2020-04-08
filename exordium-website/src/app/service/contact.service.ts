import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

// Variables
import { API } from './shared/api';
import { Contact } from './shared/contact';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    private endpoint = new API().endpoint;

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

    // Send Contact Request
    sendContact (contact: Contact): Observable<any> {
        let api = `${this.endpoint}/public/contact`;

        return this.http.post (api, contact).pipe(
            catchError(this.handleError)
        )
    }
}