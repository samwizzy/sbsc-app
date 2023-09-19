import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, retry, shareReplay, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthPayload } from '../models/auth-payload';
import { AuthResponse, ErrorResponse } from '../models/auth-response';
const { BASEURL } = environment;

const headers = new HttpHeaders().set('content-type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  offsetTime = 860000 * 10;

  constructor(private http: HttpClient, private router: Router) {}

  public register(data: AuthPayload): Observable<AuthResponse | ErrorResponse> {
    return this.http.post(`${BASEURL}/api/register`, data, { headers }).pipe(
      switchMap((response: any) => {
        this.setAuthToken = response?.token;
        this.setAuthId = response?.id;
        this.setAuthTokenExpiresAt = new Date().getTime() + this.offsetTime;
        return of(response);
      }),
      shareReplay(),
      retry(2),
      catchError((err) => {
        return of({ error: err.message, message: err.message });
      })
    );
  }

  public login(data: AuthPayload) {
    return this.http.post(`${BASEURL}/api/login`, data, { headers });
  }

  public logout(): void {
    this.clearStorage();
    this.router.navigateByUrl('/login');
  }

  public refreshToken() {
    this.setAuthTokenExpiresAt = new Date().getTime() + this.offsetTime;
    return of(this.setAuthTokenExpiresAt);
  }

  set setAuthUser(data: AuthResponse) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  get getAuthUser() {
    return JSON.parse(localStorage.getItem('data') || '{}');
  }

  get getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  set setAuthToken(token: string) {
    localStorage.setItem('token', token);
  }

  set setAuthTokenExpiresAt(expiresAt: number) {
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt));
  }

  get getAuthTokenExpiresAt(): string | null {
    return localStorage.getItem('expiresAt') || '';
  }

  set setAuthId(id: string) {
    localStorage.setItem('id', JSON.stringify(id));
  }

  get getAuthId(): string | null {
    return localStorage.getItem('id');
  }

  clearStorage() {
    localStorage.removeItem('data');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }
}
