import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

// Variables
import { API } from './shared/api';
import { User } from './shared/user';
import { Account } from './shared/account';
import { Contact } from './shared/contact';

@Injectable({
    providedIn: 'root'
})

export class ModerationService {
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

    // Get Contact Emails
    contactEmails (): Observable<any> {
        let api = `${this.endpoint}/moderation/contact`;
        return this.http.get(api, { headers: this.headers }).pipe(
            map(
                (res: Response) => {
                    return res || {}
                }
            ),
            catchError(this.handleError)
        )
    }
}