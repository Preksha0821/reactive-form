import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.createForm(this.fb);
  }

  createForm(fb: FormBuilder) {
    return fb.group({
      userName: ['', Validators.required],
      password: ['',Validators.compose ([Validators.required, Validators.minLength(4), Validators.maxLength(17)])],
      reenterpassword: ['', Validators.required]  
    });
  }

  emitLoginInfo() {
    console.log(this.loginForm);
  }
}
