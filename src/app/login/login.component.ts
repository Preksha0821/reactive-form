import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.createForm(this.fb);
  }
  
  createForm(fb:FormBuilder){
    return fb.group({
      userName:null,
      password:null,
      reenterpassword:null
    });
  }
}
