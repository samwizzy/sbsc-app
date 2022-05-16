import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserData, UserDetail } from '../models/user';
const { BASEURL } = environment;

const headers = new HttpHeaders().set('content-type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User> {
    return this.http.get<User>(`${BASEURL}/api/users`, { headers });
  }

  getAllUsers(): Observable<UserData[]> {
    return this.http
      .get<User>(`${BASEURL}/api/users`, { headers })
      .pipe(map((data) => data?.data));
  }

  getUserById(id: number | string) {
    return this.http.get<UserDetail>(`${BASEURL}/api/users/${id}`, { headers });
  }

  createUser(data: any) {
    return this.http.post(`${BASEURL}/api/users`, data, { headers });
  }

  updateUser(id: number, data: UserData) {
    return this.http.put(`${BASEURL}/api/users/${id}`, data, { headers });
  }

  deleteUser(id: number | string) {
    return this.http.delete(`${BASEURL}/api/users/${id}`, { headers });
  }
}
