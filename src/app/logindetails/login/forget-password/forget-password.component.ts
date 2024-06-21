import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit{


  forgetPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ForgetPasswordComponent>
  ) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if(this.forgetPasswordForm.valid){
      this.dialogRef.close(this.forgetPasswordForm.value);
    }
  }

  onClose(){
    this.dialogRef.close();
  }
}







