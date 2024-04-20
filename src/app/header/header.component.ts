import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { BasicauthService } from '../services/basicauth.service';
import { TempauthService } from '../services/tempauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //isUserLoggedIn:boolean=false
  constructor(public service:RestapiService) { }

  ngOnInit(): void {
   //this.isUserLoggedIn=this.service.isUserLoggedIn()
  }

}
