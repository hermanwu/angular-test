import { Component, OnInit } from '@angular/core';
import { ApplicationInstance } from '../models/application-instance.model';
import { ApplicationHttpService } from '../services/application-http.service';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import * as fromRouter from '../../shared/router/router.store/router.selector';

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

    //this.applicationInstances = [{ id: 1 }, { id: 2 }];
    this.checkChanged(true);

    // TODO: subscribe
    this.store.pipe(select(fromProduct.getAppsList)).subscribe(apps => {
      this.applicationInstances = apps;
    });

    this.store.pipe(select(fromRouter.selectUrl)).subscribe(router => {
      console.log('test');
      console.log(router);
    });
  }

  checkChanged(value: boolean): void {
    this.store.dispatch({
      type: 'SHOW_APP',
      payload: [{ id: 1 }, { id: 2 }],
    });
  }
}
