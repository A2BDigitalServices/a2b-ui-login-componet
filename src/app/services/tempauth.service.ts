import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempauthService {

  constructor() { }

  auth(username:any,password:any){
    if(username==='kishore' && password==='kishore'){
      sessionStorage.setItem('auth',username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('auth')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('auth')
  }
}
