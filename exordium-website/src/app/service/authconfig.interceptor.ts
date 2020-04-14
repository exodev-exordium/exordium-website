import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private authService: AuthService
        ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken();

        req = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + authToken
            }
        });

        return next.handle(req).pipe(tap(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // token still valid
                }
            },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    // token no longer valid
                    if (err.status === 401) {
                        this.authService.signout();
                    }
                }
            }
        ));
    }
}
