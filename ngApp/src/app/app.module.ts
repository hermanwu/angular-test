import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ApplicationRoutingModule } from './application/application-routing.module';
import { ApplicationsPageComponent } from './application/applications-page/applications-page.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SignupComponent } from './authentication/signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    SignupComponent,
    SpecialEventsComponent,
    StockPropertiesComponent,
    ApplicationsPageComponent,
  ],
  imports: [
    AuthenticationModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    ApplicationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
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
