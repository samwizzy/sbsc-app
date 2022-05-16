import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  Observable,
  of,
  retry,
  shareReplay,
  switchMap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthPayload } from '../models/auth-payload';
import { AuthResponse, ErrorResponse } from '../models/auth-response';
const { BASEURL } = environment;

const headers = new HttpHeaders().set('content-type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(data: AuthPayload): Observable<AuthResponse | ErrorResponse> {
    return this.http.post(`${BASEURL}/api/register`, data, { headers }).pipe(
      switchMap((response: any) => {
        this.setAuthToken = response?.token;
        this.setAuthId = response?.id;
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

  public logout(data: any) {
    return this.http.post(`${BASEURL}`, data, { headers });
  }

  public refreshToken() {
    return this.http.post(`${BASEURL}`, { headers });
  }

  get getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  set setAuthToken(token: string) {
    localStorage.setItem('token', token);
  }

  get getAuthId(): string | null {
    return localStorage.getItem('id');
  }

  set setAuthId(id: string) {
    localStorage.setItem('id', JSON.stringify(id));
  }
}
