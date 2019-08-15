import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsPageComponent } from './applications-page/applications-page.component';

const routes: Routes = [
  {
    path: 'applications',
    component: ApplicationsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
