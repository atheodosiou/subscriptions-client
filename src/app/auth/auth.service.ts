import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertService } from '../shared';

@Injectable()
export class AuthService {
  private serverUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtService: JwtHelperService,
    private alertService: AlertService
  ) {}

  get isLoggedIn(): boolean {
    return !this.jwtService.isTokenExpired();
  }

  login(body: {
    email: string;
    password: string;
  }): Observable<{ accessToken: string }> {
    return this.http
      .post<{ accessToken: string }>(`${this.serverUrl}/auth/login`, body)
      .pipe(
        tap((res) => {
          this.setAccessToken(res.accessToken);
          this.router.navigate(['/home']);
          this.alertService.success('Login', 'Wellcome back!', 3000);
        }),
        catchError((error) => {
          this.handleError(error);
          return of(error);
        })
      );
  }

  register(body: {
    fullName: string;
    email: string;
    password: string;
  }): Observable<User> {
    return this.http.post<User>(`${this.serverUrl}/auth/register`, body).pipe(
      tap(() => {
        this.router.navigate(['/auth/login']);
        this.alertService.success(
          'Register',
          'Wellcome! Please login to continue.',
          3000
        );
      }),
      catchError((error) => {
        this.handleError(error);
        return of(error);
      })
    );
  }

  private setAccessToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private handleError(error: HttpErrorResponse): void {
    this.alertService.error('Error', error?.message || 'Something went wrong!');
    console.error(error);
  }
}
