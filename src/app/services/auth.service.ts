import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Resolve} from "@angular/router";
// import {url} from "inspector";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  loginStatus = new Subject();

  constructor(private httpClient:HttpClient) { }

  login(loginRQ:any){
    // setTimeout(()=>{
    //   this.loginStatus.next(status);
    // },1500);

    this.httpClient.post ( 'http://localhost:8080/user/getLoggedUser',loginRQ).
    subscribe((userDetails)=>{
      console.log("userDetails",userDetails)

      if(userDetails != null){
        this.loginStatus.next(userDetails);
      }

      else {alert("Authentication Fail")};

    });

  }
}
