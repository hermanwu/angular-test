import { Component, OnInit } from '@angular/core';
import { ApplicationInstance } from '../models/application-instance.model';
import { ApplicationHttpService } from '../services/application-http.service';

@Component({
  selector: 'app-applications-page',
  templateUrl: './applications-page.component.html',
  styleUrls: ['./applications-page.component.scss'],
})
export class ApplicationsPageComponent implements OnInit {
  applicationInstances: ApplicationInstance[];

  constructor(private applicationHttpService: ApplicationHttpService) {}

  ngOnInit() {
    // this.applicationHttpService.getApplications().subscribe(applications => {
    //   this.applicationInstances = applications;
    // });
    this.applicationInstances = [{ id: 1 }, { id: 2 }];
  }
}
