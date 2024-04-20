import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicauthService {

  constructor(private http:HttpClient) { }

  // executeBasicauth(username:any,password:any){
  //   let basicAuthHeaderString = 'Basic '+ window.btoa(username+ ':' +password)

  //   let headers= new HttpHeaders({
  //     Authorization:basicAuthHeaderString
  //   }
      
  //   )
  //   //return this.http.get<AuthenticationBean>('http://localhost:8081/auth')
  //   return this.http.get<AuthenticationBean>('http://localhost:8081/auth',{headers}).pipe(
  //     map(
  //       data => {
  //         sessionStorage.setItem('authenticateUser',username);
  //         sessionStorage.setItem('token',basicAuthHeaderString);
  //       return data;
  //       }
  //     )
  //   );
  // }

  
  // getAuthenticatedUser(){
  //   return sessionStorage.getItem('authenticateUser')
  // }

  // getAuthenticatedToken(){
  //   if(this.getAuthenticatedUser()){
  //     return sessionStorage.getItem('token')
  //   }
  //   return null;
  // }

  // isUserLoggedIn(){
  //   let user = sessionStorage.getItem('authenticateUser');
  //   return !(user===null)
  // }

  // logout(){
  //   sessionStorage.removeItem('authenticateUser');
  // }
}

// export class AuthenticationBean{
//   constructor(public message:string){}
// }