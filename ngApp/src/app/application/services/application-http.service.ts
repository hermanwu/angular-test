import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApplicationInstance } from '../models/application-instance.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationHttpService {
  readonly applicationsUrl = 'http://localhost:3000/api/applications';

  constructor(private http: HttpClient) {}

  getApplications(): Observable<ApplicationInstance[]> {
    return this.http.get<ApplicationInstance[]>(this.applicationsUrl);
  }
}
