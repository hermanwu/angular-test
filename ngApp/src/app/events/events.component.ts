import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = [];
  constructor(private httpRequestService: HttpRequestService) {}

  ngOnInit() {
    this.httpRequestService
      .getEvents()
      .subscribe(res => (this.events = res), err => console.log(err));
  }
}
