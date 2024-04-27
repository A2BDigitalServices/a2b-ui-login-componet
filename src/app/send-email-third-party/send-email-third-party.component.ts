import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailRequest, RestapiService } from '../restapi.service';

@Component({
  selector: 'app-send-email-third-party',
  templateUrl: './send-email-third-party.component.html',
  styleUrls: ['./send-email-third-party.component.css']
})
export class SendEmailThirdPartyComponent implements OnInit {

  id:any='';
  mailRequest:any
  constructor(private router:Router, private route:ActivatedRoute,private service:RestapiService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.mailRequest = new MailRequest('a2bdigitalservice@gmail.com','Please enter email address');
  }

  sendMail() {
    this.service.sentMailToVendor(this.id,this.mailRequest).subscribe(
      data =>{
        this.router.navigate(['todos']);
      }
    )
  }
}
