import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  maxDate;
  registerForm: FormGroup;

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    this.registerForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', { validators: [Validators.required] }),
      firstName: new FormControl('', {
        validators: [Validators.required],
      }),
      lastName: new FormControl('', {
        validators: [Validators.required],
      }),
      phoneCountryCode: new FormControl('', {
        validators: [Validators.required],
      }),
      phoneNumber: new FormControl('', {
        validators: [Validators.required],
      }),
      securityQuestionUuid: new FormControl('', {
        validators: [Validators.required],
      }),
      securityQuestionAnswer: new FormControl('', {
        validators: [Validators.required],
      }),
      AgeConfirmed: new FormControl('', {
        validators: [Validators.required],
      }),
      privacyPolicyAgreed: new FormControl('', {
        validators: [Validators.required],
      }),
      userLicenseAgreed: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  registerUser() {
    console.log(this.registerForm);
    this._auth.registerUser(this.registerForm.value).subscribe(
      res => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        this._router.navigate(['/special-app']);
      },
      err => console.log(err)
    );
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
