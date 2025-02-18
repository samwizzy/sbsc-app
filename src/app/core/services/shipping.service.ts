import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const headers = new HttpHeaders().set('content-type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  countryApi = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http
      .get<any[]>(this.countryApi, { headers })
      .pipe(
        map((countries) => countries.sort((a, b) => a.name.common.localeCompare(b.name.common)))
      );
  }
}
