import { Component } from '@angular/core';
import { RestapiService } from './restapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A2B Digital Login Portal';
  constructor(public service:RestapiService) { }
}
