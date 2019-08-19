import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registerUserData = {};
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        this._router.navigate(['/special-app']);
      },
      err => console.log(err)
    );
  }
}
