import { Component, OnInit } from '@angular/core';
import { TempauthService } from '../services/tempauth.service';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router:Router,public service:RestapiService) { }
  cards = [
    //{ name: 'CreateCase', url: 'https://a2bdigitalservice.000webhostapp.com/open.html' },
    { name: 'WeRize', url: 'https://partner.werize.com/homePage' },
    { name: 'DigiLoans', url: 'https://lms.starpowerzdigiloans.com/login' },
    { name: 'iBOG', url: 'https://ibog.inditrade.com/' },
    { name: 'Leadingkart', url: 'https://channel.lendingkart.com/dsachannelpartner-xlr8/partner/login' },
    { name: 'Chola', url: 'https://csellos.chola.murugappa.com/portal/login' },
    { name: 'AdityaBirla', url: 'https://adityabirla-platform.finbox.in/signin-mobile' },
    { name: 'Roinet', url: 'https://xpresso.roinet.in/XPRESSO/Login.aspx' },
    { name: 'ICICI Bank', url: 'https://ilens.icicibank.com/login/' }
  ];
  ngOnInit(): void {
  }

}
