import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

// Variables
import { API } from './shared/api';
import { User } from './shared/user';
import { DiscordToken } from './shared/Tokens';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private endpoint = new API().endpoint;
    private headers = new API().headers;

    constructor(
        private http: HttpClient,
        public router: Router
    ) { }

    // Handle Errors
    handleError(error: HttpErrorResponse) {
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

    // Basic User Data
    getUserDataBasic(): Observable<any> {
        const api = `${this.endpoint}/user/me/basic`;
        return this.http.get(api, { headers: this.headers }).pipe(
            map(
                (res: Response) => {
                    return res || {};
                }
            ),
            catchError(this.handleError)
        );
    }

    // Advanced User Data
    getUserDataAdvanced(): Observable<any> {
        const api = `${this.endpoint}/user/me/advanced`;
        return this.http.get(api, { headers: this.headers }).pipe(
            map(
                (res: Response) => {
                    return res || {};
                }
            ),
            catchError(this.handleError)
        );
    }

    // User Tokens
    getUserTokens(): Observable<any> {
        const api = `${this.endpoint}/user/me/tokens`;
        return this.http.get(api, { headers: this.headers }).pipe(
            map(
                (res: Response) => {
                    return res || {};
                }
            ),
            catchError(this.handleError)
        );
    }

    // Connect Discord
    connectDiscord(token: DiscordToken): Observable<any> {
        const api = `${this.endpoint}/user/connections/discord`;

        return this.http.post (api, token, { headers: this.headers }).pipe(
            catchError(this.handleError)
        );
    }

    // Connect GitHub
    connectGithub(): Observable<any> {
        const api = `${this.endpoint}/user/connections/github`;
        return this.http.get(api, { headers: this.headers }).pipe(
            map(
                (res: Response) => {
                    return res || {};
                }
            ),
            catchError(this.handleError)
        );
    }
}
