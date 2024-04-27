import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  appliedCount: any = ''
  progressCount: any = ''
  rejectedCount: any = ''
  closedCount: any = ''
  offeredCount: any = ''
  pendingCount: any = ''
  approvedCount: any = ''
  cards: any = []
  constructor(public service:RestapiService) { }

  ngOnInit(): void {
    this.service.getAppliedCasesCount().subscribe(
      count => {
        this.appliedCount = count;
        console.log('count of applied is ' + this.appliedCount);
        this.initilizeCards();
      }
    );
    this.service.getProgressCasesCount().subscribe(
      count => {
        this.progressCount = count;
        console.log('count of progress is ' + this.progressCount);
        this.initilizeCards();
      }
    );
    this.service.getRejectedCasesCount().subscribe(
      count => {
        this.rejectedCount = count;
        console.log('count of rejected is ' + this.rejectedCount);
        this.initilizeCards();
      }
    );
    this.service.getOfferedCasesCount().subscribe(
      count => {
        this.offeredCount = count;
        console.log('count of offered is ' + this.offeredCount);
        this.initilizeCards();
      }
    );
    this.service.getPendingCasesCount().subscribe(
      count => {
        this.pendingCount = count;
        console.log('count of pending is ' + this.pendingCount);
        this.initilizeCards();
      }
    );
    this.service.getClosedCasesCount().subscribe(
      count => {
        this.closedCount = count;
        console.log('count of closed is ' + this.closedCount);
        this.initilizeCards();
      }
    );

    this.service.getApprovedCasesCount().subscribe(
      count => {
        this.approvedCount = count;
        console.log('count of approved is ' + this.approvedCount);
        this.initilizeCards();
      }
    )
  }

  initilizeCards() {
    this.cards = [
      { name: 'Applied', count:this.appliedCount },
      { name: 'Progress', count:this.progressCount },
      { name: 'Pending' , count: this.pendingCount},
      { name: 'Approved' , count: this.approvedCount},
      { name: 'Rejected', count: this.rejectedCount },
      { name: 'Offered', count: this.offeredCount },
      { name: 'Closed' , count: this.closedCount}
    ];
  }
  


 

}
