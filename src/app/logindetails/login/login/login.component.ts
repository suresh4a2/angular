import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  forgetPasswordForm: FormGroup;
  isSignUp = false;
  isForgetPasswordPopupOpen = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });

    this.signUpForm = this.fb.group({
      firstname: [''],
      email: [''],
      mobile: [''],
      password: [''],
      country: ['']
    });

    this.forgetPasswordForm = this.fb.group({
      email: [''],
      newPassword: [''],
      confirmPassword: ['']
    });
  }

  onLogin() {
    console.log('Login Form Data:', this.loginForm.value);
  }

  onSignUp() {
    console.log('Sign Up Form Data:', this.signUpForm.value);
  }

  toggleSignUp() {
    this.isSignUp = !this.isSignUp;
  }

  openForgetPasswordPopup() {
    this.isForgetPasswordPopupOpen = true;
  }

  onForgetPassword() {
    console.log('Forget Password Form Data:', this.forgetPasswordForm.value);
    this.isForgetPasswordPopupOpen = false;
  }
}



