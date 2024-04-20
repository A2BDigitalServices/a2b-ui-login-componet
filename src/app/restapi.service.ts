import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { User } from './models/user';
import { UserSignup } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }


  //login(username: string, password: string) {
  login(user: User): Observable<any> {
    // let heaserstring = 'Basic ' + btoa(username + ':' + password)
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // return this.http.get("http://localhost:8081/auth", { headers })
      //return this.http.post('https://a2b-login-java-microservice.onrender.com/login',user,{ responseType: 'text' })
      return this.http.post('http://localhost:8081/login',user,{ responseType: 'text' })
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticateUser', user.username);
           //sessionStorage.setItem('token', heaserstring);
            sessionStorage.setItem('token', data);
            return data;
          }
        )
      );
  }

  signup(user: UserSignup): Observable<any> {
    // let heaserstring = 'Basic ' + btoa(username + ':' + password)
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // return this.http.get("http://localhost:8081/auth", { headers })
       return this.http.post('http://localhost:8081/users',user,{ responseType: 'text' });
      
  }


  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateUser')
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('token')
    }
    return null;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user===null)
    //return this.getToken() != null
  }
  

  logout(){
    sessionStorage.removeItem('authenticateUser');
    //localStorage.removeItem('token');
    
  }

  getalltodos(){
    //return this.http.get<FormData[]>('https://a2b-login-java-microservice.onrender.com/forms');
    return this.http.get<FormData[]>('http://localhost:8081/forms');
  }

  // createTodo(todo:OpenLoan){
  //   // return this.http.post<OpenLoan>('http://localhost:8081/open',todo);
  //   return this.http.post<OpenLoan>('https://a2b-login-java-microservice.onrender.com/open',todo);
  // }
  createTodo(todo:FormData){
    //return this.http.post<FormData>('https://a2b-login-java-microservice.onrender.com/form',todo);
    return this.http.post<FormData>('http:localhost:8081/form',todo);
  }
  // deleteTodo(id:any){
  //   // return this.http.delete(`http://localhost:8081/loans/delete/${id}`);
  //   return this.http.delete(`https://a2b-login-java-microservice.onrender.com/loans/delete/${id}`);
  // }

  deleteTodo(id:any){
    //return this.http.delete(`https://a2b-login-java-microservice.onrender.com/forms/delete/${id}`);
    return this.http.delete(`http://localhost:8081/forms/delete/${id}`);
  }

  // getTodo(id:any){
  //   // return this.http.get<OpenLoan>(`http://localhost:8081/loans/${id}`);
  //   return this.http.get<OpenLoan>(`https://a2b-login-java-microservice.onrender.com/loans/${id}`);
  // }
 
  getTodo(id:any){
    //return this.http.get<FormData>(`https://a2b-login-java-microservice.onrender.com/forms/${id}`);
    return this.http.get<FormData>(`http://localhost:8081/forms/${id}`);
  }
  // modifyTodo(id:any,todo:OpenLoan){
  //   // return this.http.put(`http://localhost:8081/loans/update/${id}`,todo);
  //   return this.http.put(`https://a2b-login-java-microservice.onrender.com/loans/update/${id}`,todo);
  // }
  modifyTodo(id:any,todo:FormData){
   
    //return this.http.put(`https://a2b-login-java-microservice.onrender.com/forms/update/${id}`,todo);
    return this.http.put(`http://localhost:8081/forms/update/${id}`,todo);

  }
}


// export class OpenLoan{
//   constructor(
//     public id: number,
//     public firstname: string,
//     public lastname: string,
//     public email: string,
//     public phone: string,
//     public address: string,
//     public partnerType: string,
//     public status: string,
//     public remarks: string
//   ){}
// }

export class FormData{
  constructor(
    public id:number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public aadharnumber: string,
    public dob: string,
    public pannumber: string,
    public soname: string,
    public sophone: string,
    public somail: string,
    public presentaddressline1: string,
    public presentaddressline2: string,
    public presentstate: string,
    public presentcountry: string,
    public presentpincode: string,
    public permanentaddressline1: string,
    public permanentaddressline2: string,
    public permanentstate: string,
    public permanentcountry: string,
    public permanentpincode: string,
    public companyname: string,
    public companyaddressline1: string,
    public companyaddressline2: string,
    public companystate: string,
    public companycountry: string,
    public companypincode: string,
    public companyemail: string,
    public monthlyincome: string,
    public requiredamount: string,
    public tenure: string,
    public activeLoans: string,
    public totalEMIAmount: string,
    public reference1name: string,
    public reference1phone: string,
    public reference2name: string,
    public reference2phone: string,
    public nomineename: string,
    public nomineeage: string,
    public nomineephone: string,
    public nomineeemail: string
  ){}
}