import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { User } from './models/user';
import { UserSignup } from './signup/signup.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<any>(environment.A2B_DIGITAL_LOGIN_URL + 'login', user)
    //return this.http.post<any>('https://a2b-login-java-microservice.onrender.com/login', user)
      .pipe(
        map(
          (response: { role: string, token: string }) => {
            sessionStorage.setItem('authenticateUser', user.username);
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('role', response.role); // Storing role
            return response;
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
  
  isUserAdmin(){
    let role = sessionStorage.getItem('role');
    console.log("role is: " + role);
    return (role ==='admin')
    //return this.getToken() != null
  }

  isUserEmployee(){
    let role = sessionStorage.getItem('role');
    console.log("role is: " + role);
    return (role ==='employee')
    //return this.getToken() != null
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
    //localStorage.removeItem('token');
    
  }

  getalltodos(){
    return this.http.get<CustomFormData[]>(environment.A2B_DIGITAL_LOGIN_URL +'forms');
    //return this.http.get<CustomFormData[]>('http://localhost:8081/forms');
  }


  createTodo(todo:FormData){
    return this.http.post<CustomFormData>(environment.A2B_DIGITAL_LOGIN_URL + 'form',todo);
    //return this.http.post<CustomFormData>('http:localhost:8081/form',todo);
  }


  deleteTodo(id:any){
    return this.http.delete(environment.A2B_DIGITAL_LOGIN_URL + `forms/delete/${id}`);
    //return this.http.delete(`http://localhost:8081/forms/delete/${id}`);
  }

 
 
  getTodo(id:any){
    return this.http.get<CustomFormData>(environment.A2B_DIGITAL_LOGIN_URL + `forms/${id}`);
    //return this.http.get<CustomFormData>(`http://localhost:8081/forms/${id}`);
  }

  modifyTodo(id:any,todo:CustomFormData){
   
    return this.http.put(environment.A2B_DIGITAL_LOGIN_URL + `forms/regular/update/${id}`,todo);
    //return this.http.put(`http://localhost:8081/forms/update/${id}`,todo);

  }

  modifyTodoAfterUploadDocuments(id:any,todo:CustomFormData){
   
    return this.http.put(environment.A2B_DIGITAL_LOGIN_URL + `forms/update/${id}`,todo);
    //return this.http.put(`http://localhost:8081/forms/update/${id}`,todo);

  }
  sentMailToVendor(id:any, mailRequest: MailRequest){
    return this.http.post<MailRequest>(environment.A2B_DIGITAL_LOGIN_URL + `sendEmailToThirdParty/${id}`,mailRequest);
    //return this.http.post<MailRequest>(`http://localhost:8081/sendEmailToThirdParty/${id}`,mailRequest);
  }

  getAppliedCasesCount(){
    
    return this.http.get(environment.A2B_DIGITAL_LOGIN_URL + 'count/Applied');
  }

  getProgressCasesCount(){
    return this.http.get(environment.A2B_DIGITAL_LOGIN_URL + 'count/Progress');
  }

  getOfferedCasesCount(){
    return this.http.get(environment.A2B_DIGITAL_LOGIN_URL + 'count/Offered');
  }
  getRejectedCasesCount(){
    return this.http.get(environment.A2B_DIGITAL_LOGIN_URL + 'count/Rejected');
  }

  getClosedCasesCount(){
    return this.http.get(environment.A2B_DIGITAL_LOGIN_URL + 'count/Closed');
  }

  getPendingCasesCount(){
    return this.http.get(environment.A2B_DIGITAL_LOGIN_URL + 'count/Pending');
  }

  getApprovedCasesCount(){
    return this.http.get(environment.A2B_DIGITAL_LOGIN_URL + 'count/Approved');
  }
}



export class CustomFormData{
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
    public nomineeemail: string,
    public status: String,
    public date: String,
    public whoapplied: String
  ){}
}

export class MailRequest {
  constructor(
    public from: string,
    public to: string
  ){ }
}