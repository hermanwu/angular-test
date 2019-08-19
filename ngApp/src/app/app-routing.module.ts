import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { StockPropertiesComponent } from './stock-properties/stock-properties.component';
import { StockPropertiesResolverService } from './stock-properties/stock-properties-resolver.service';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/applications',
    pathMatch: 'full',
  },
  {
    path: 'special-app',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: SignupComponent,
  },
  {
    path: 'stock',
    component: StockPropertiesComponent,
    resolve: { stock: StockPropertiesResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
