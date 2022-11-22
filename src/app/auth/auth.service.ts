import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private serverUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(body: {
    email: string;
    password: string;
  }): Observable<{ accessToken: string }> {
    return this.http
      .post<{ accessToken: string }>(`${this.serverUrl}/auth/login`, body)
      .pipe(
        tap((res) => this.setAccessToken(res.accessToken)),
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
