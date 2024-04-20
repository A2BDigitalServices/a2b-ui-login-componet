import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname: string='';
  lastname: string='';
  email: string='';
  password: string='';

  constructor(private service:RestapiService,private router:Router) { }

  ngOnInit(): void {
  }

  userModel = new UserSignup("","","","")
  doSignup(){
    let resp = this.service.signup(this.userModel);
    resp.subscribe(data => {
      //this.message = data;
      this.router.navigate(["/login"])
     
    },
    error =>{
      this.router.navigate(['/**'])
    }
    );
  }
}

export class UserSignup{
  constructor(
    public firstname: string, 
    public lastname: string,
    public email:string,
    public password:string
    
    ) { }
}