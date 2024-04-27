import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RestapiService } from '../restapi.service';
import { ApisService } from '../services/apis.service';
import { BasicauthService } from '../services/basicauth.service';
import { TempauthService } from '../services/tempauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // invalidLogin=false
  // username=''
  // password=''
  // constructor(private router:Router,private service:BasicauthService) { }

  // ngOnInit(): void {
  // }

  // handleLogin(){
    
  //     this.service.executeBasicauth(this.username,this.password)
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['home',this.username]);
  //         this.invalidLogin=false;
  //       },
  //       error =>{
  //         this.invalidLogin=true;
  //       }
  //     )
  // }

  username: string='';
  password: string='';
  message: any
  invalidLogin=false;
  userModel = new User("","")
  constructor(private service: RestapiService,private router:Router) { }

  ngOnInit() {
  }

  doLogin() {
    //let resp = this.service.login(this.username, this.password);
    let resp = this.service.login(this.userModel);
    resp.subscribe(data => {
      this.message = data;
      // this.router.navigate(["/home",this.userModel.username])
      this.router.navigate(["/status",this.userModel.username])
     //window.location.href = 'https://a2bdigitalservice.000webhostapp.com/dashboard.html';
     this.invalidLogin=false;
    },
    error =>{
      this.invalidLogin=true;
    }
    );
  }
}
