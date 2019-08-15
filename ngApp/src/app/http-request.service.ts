import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestService {
  readonly applicationsUrl = 'http://localhost:3000/api/applications';
  readonly specialAppUrl = 'http://localhost:3000/api/special-app';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    return this.http.get<any>(this.applicationsUrl);
  }

  getStock(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/stock');
  }

  getSpecialEvents(): Observable<any> {
    return this.http.get<any>(this.specialAppUrl);
  }
}
