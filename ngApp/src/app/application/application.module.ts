import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationsPageComponent } from './applications-page/applications-page.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/product.reducer';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [ApplicationsPageComponent],
  imports: [
    StoreModule.forFeature('applications', reducer),
    ApplicationRoutingModule,
    SharedModule,
  ],
})
export class ApplicationModule {}
