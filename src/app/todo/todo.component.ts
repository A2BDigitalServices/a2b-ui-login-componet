import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { RestapiService, OpenLoan } from '../restapi.service';
import { RestapiService, FormData } from '../restapi.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:any='';
  todo:any

  constructor(private router:Router, private route:ActivatedRoute,private service:RestapiService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    //this.todo = new OpenLoan(this.id,'Please enter firstname','Please enter lastname','Please enter email','Please enter phone','Please enter address','Please enter partnerType','Please enter status','Please enter remarks');
    this.todo = new FormData(this.id,'Please enter Firstname',
                            'Please enter Lastname','Please enter Email',
                            'Please enter Aadharnumber','Please enter DateofBirth',
                            'Please enter PAN Number','Please enter Parent Name',
                            'Please enter Parent Phone','Please enter Parent Email',
                            'Please enter Present AddressLine 1','Please enter Present AddressLine 2',
                            'Please enter Present State','Please enter Present Country',
                            'Please enter Present Pincode','Please enter Permanent AddressLine 1',
                            'Please enter Permanent AddressLine 2','Please enter Permanent State',
                            'Please enter Present Country', 'Please enter Present Pincode',
                            'Please enter Company Name','Please enter Company Address Line 1',
                            'Please enter Company Address Line 2','Please enter Company State',
                            'Please enter Company Country','Company Pincode',
                            'Please enter Company Email','Please enter Monthly Income',
                            'Please enter Required Amount','Please enter Tenure',
                            'Please enter Active Loans','Please enter your current EMI Amount',
                            'Please enter Reference1 Name','Please enter Reference1 Phone',
                            'Please enter Reference2 Name','Please enter Reference2 Phone',
                            'Please enter Nominee Name','Please enter Nominee Age',
                            'Please enter Nominee Phone', 'Please enter Nominee Email');
    if(this.id!=-1){
      this.retriveTodo();
    }
  }

  retriveTodo(){
    this.service.getTodo(this.id).subscribe(
      data => this.todo= data      
   )
  }

  saveTodo(){
    if(this.id===-1){
      this.service.modifyTodo(this.id,this.todo).subscribe(
        data =>{
          this.router.navigate(['todos']);
        }
      )
    }else{
      this.service.modifyTodo(this.id,this.todo).subscribe(
        data =>{
          this.router.navigate(['todos']);
        }
      )
    }
  }
}
