import { Component, ViewChild } from '@angular/core';
import { AuthService } from './authentication/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngApp';

  constructor(private _authService: AuthService) {}
}
