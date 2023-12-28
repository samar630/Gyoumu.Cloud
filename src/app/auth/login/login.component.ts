import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { loginInterface } from 'src/app/moduleLogin/login.interface';


@Component({

  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {

  myForm: FormGroup;
  hide = true;

 constructor (private http: HttpClient,private formBuilder: FormBuilder){
  this.myForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    remember_me : new FormControl(false),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  })
 }
 config = {
  headers: {
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer your_token'
  }
};



submitForm(): void {
 if(this.myForm.valid ){
  console.log(this.myForm.value,'value')
  if(this.myForm!.value!.remember_me){

    console.log('localStorge')
   } else{
    
    console.log('sessionStorage')
   } 
  this.http
    .post<{ user: loginInterface }>(
      'https://api.realworld.io/api/users/login',
      {
        user: this.myForm.getRawValue(),
      }
    )
    .subscribe((response) => {
      console.log('response', response);
     if(this.myForm!.value!.remember_me){
      localStorage.setItem('token', response.user.token);
      console.log('localStorge')
     } else{
      sessionStorage.setItem('token', response.user.token);
      console.log('sessionStorage')
     }   
    },
    (error) => {
      if (error.status === 500) {
        console.log(error,'Error 500 occurred.');
      } else if (error.status === 422) {
      console.log(error,'Error 422 occurred.');
      } else {
        console.log('Other error occurred.');
      }
    }
    );
 }

}

}
