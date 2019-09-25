import { Component, OnInit } from '@angular/core';
import { ApplicationInstance } from '../models/application-instance.model';
import { ApplicationHttpService } from '../services/application-http.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-applications-page',
  templateUrl: './applications-page.component.html',
  styleUrls: ['./applications-page.component.scss'],
})
export class ApplicationsPageComponent implements OnInit {
  applicationInstances: ApplicationInstance[];

  constructor(
    private applicationHttpService: ApplicationHttpService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    // this.applicationHttpService.getApplications().subscribe(applications => {
    //   this.applicationInstances = applications;
    // });

    this.applicationInstances = [{ id: 1 }, { id: 2 }];
    this.checkChanged(true);
  }

  checkChanged(value: boolean): void {
    console.log('test');
    console.log(this.store);
    this.store.dispatch({
      type: 'SHOW_APP',
      payload: [{ id: 1 }, { id: 2 }],
    });
  }
}
