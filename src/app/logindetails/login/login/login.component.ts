import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
//import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isSignup: boolean=true;

isLogin: boolean=true;


firstname:string='';
email:string='';
mobile: string='';
password: string='';
country: string='';
countries: string[]=[
  'United States','Canda','Untited Kingdom','Australia','Germany','France','India','China','Japan','Brazil'
];


  loginForm: FormGroup;
  
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,public dialog:MatDialog, private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    
      });
      this.signupForm=this.fb.group({
        firstname:['',[Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        mobile:['',[Validators.required]],
        password:['', [Validators.required, Validators.minLength(6)]]
      });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Validation succesfully', this.loginForm.value);
      alert("Login Successfully");
      this.router.navigateByUrl("/dashboard")
    }
  }


  
  toggleSignup(){
    this.isSignup=!this.isSignup;
  }

  signup(){
    if (this.signupForm.valid) {
      console.log('Validation succesfully', this.signupForm.value);
      alert("Signup Successfully");
      this.isSignup=!this.isLogin;
    }
  }
  loginClick(){
    this.isLogin=true
    this.isSignup=false;
  }

  signupClick(){
    this.isLogin=false;
    this.isSignup=true;
  }

}


