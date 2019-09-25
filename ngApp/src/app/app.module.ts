import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './authentication/services/auth.service';
import { HttpRequestService } from './http-request.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { StockPropertiesComponent } from './stock-properties/stock-properties.component';
import { StockPropertiesResolverService } from './stock-properties/stock-properties-resolver.service';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SignupComponent } from './authentication/signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { ApplicationModule } from './application/application.module';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    SignupComponent,
    SpecialEventsComponent,
    StockPropertiesComponent,
    HeaderComponent,
    SidenavListComponent,
  ],
  imports: [
    ApplicationModule,
    AuthenticationModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App Devtools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    HttpRequestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    StockPropertiesResolverService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
