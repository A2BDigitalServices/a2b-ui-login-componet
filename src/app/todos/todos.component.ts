import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { RestapiService, OpenLoan } from '../restapi.service';
import { RestapiService, CustomFormData } from '../restapi.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //todolist: OpenLoan[] = [];
  todolist: CustomFormData[] = [];
  errmssg:string='';
  delmssg:string=''
  constructor(private router:Router, private service:RestapiService) { }

  ngOnInit(): void {
    this.alltodos();
  }

  alltodos(){
    this.service.getalltodos().subscribe(
      response => {
        this.todolist = response;
      },
      error => {
        this.errmssg=error.error.message;
      }
    )
  }
 
  
  deleteTodo(id:any){
    this.service.deleteTodo(id).subscribe(
      response => {
        this.delmssg='Successfully Deleted Case ' + id;
        this.alltodos();
      }
    )
}

updateTodo(id:any){
  this.router.navigate(['/todo',id])
}

addTodo(){
  this.router.navigate(['/todo',-1])
}

uploadTodo(id:any){
  this.router.navigate(['/upload',id])
}

}
