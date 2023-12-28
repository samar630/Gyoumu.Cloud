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
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {



}
