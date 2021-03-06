import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/services/auth.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss'],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = [];

  constructor(
    private httpRequestService: HttpRequestService,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.getSpecialEvents();
  }

  getSpecialEvents() {
    this.httpRequestService.getSpecialEvents().subscribe(
      res => {
        if (res.message === 'expired access token') {
          console.log('our token is expired');
          localStorage.removeItem('accessToken');

          console.log('try to refresh token');
          this._authService.refreshToken().subscribe(
            result => {
              localStorage.setItem('accessToken', result.accessToken);

              return this.getSpecialEvents();
            },
            err => {
              this.redirectToLogin(err);
            }
          );
        } else {
          this.specialEvents = res;
        }
      },
      err => {
        this.redirectToLogin(err);
      }
    );
  }

  redirectToLogin(err) {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        this._router.navigate(['/login']);
      }
    }
  }
}
