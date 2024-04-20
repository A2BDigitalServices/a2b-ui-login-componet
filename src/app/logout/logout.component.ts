import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { BasicauthService } from '../services/basicauth.service';
import { TempauthService } from '../services/tempauth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:RestapiService) { }

  ngOnInit(): void {
    this.service.logout()
    window.location.href = 'https://a2bdigitalservice.000webhostapp.com/';
  }

}
