import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first }  from 'rxjs/operators';
import { AuthenticationService } from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

 	loginForm: FormGroup;
  	submitted: boolean = false;
 	invalidLogin: boolean = false;
  //constructor() { }
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  	 this.loginForm = this.formBuilder.group({
  	  email: ['',Validators.required],
  	  password: ['',Validators.required]

  	 });
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

    if(this.loginForm.controls.email.value && this.loginForm.controls.password.value){
      this.router.navigate(['list-user']);
    }else{

      this.invalidLogin = true;
    }


  }

}
