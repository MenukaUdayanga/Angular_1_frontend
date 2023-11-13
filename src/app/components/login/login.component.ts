import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm:FormGroup;

  constructor(private authService: AuthService,
              private router:Router,
              private fb:FormBuilder){}

  ngOnInit(): void {
    this.authService.loginStatus.subscribe((loginStatus)=>{
     if (loginStatus){
       this.router.navigate(['/admin/dashboard'])
     }else
       {
         alert("Authentication Fail")
         // console.log("Authentication Fail")
         }
    });

    this.loginForm = this.fb.group({
      userName:['Menuka',Validators.required],
       password:['1234',Validators.required]
    })
  }

  login(){

   let data = this.loginForm.getRawValue();

   // if (data.username=='Menuka' && data.password=='password') {
   //   this.authService.login(true);
   // }
   //
   // else {this.authService.login(false);}

   // console.log("data",data)
    this.authService.login(data);
  }

}
