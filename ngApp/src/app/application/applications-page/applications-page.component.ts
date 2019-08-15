import { Component, OnInit } from '@angular/core';
import { ApplicationInstance } from '../models/application-instance.model';

@Component({
  selector: 'app-applications-page',
  templateUrl: './applications-page.component.html',
  styleUrls: ['./applications-page.component.scss'],
})
export class ApplicationsPageComponent implements OnInit {
  applicationInstances: ApplicationInstance[];

  constructor() {}

  ngOnInit() {
    this.applicationInstances = [{ id: 1 }, { id: 2 }];
  }
}
