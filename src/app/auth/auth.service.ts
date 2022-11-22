import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';

@Injectable()
export class AuthService {
  private serverUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

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
    console.error(error);
  }
}
