import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OloMaterial } from './olo-material';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { MainNavComponent } from './_main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CalendarTrackerComponent } from './calendar-tracker/calendar-tracker.component';
import { MessagesComponent } from './calendar-tracker/messages/messages.component';
import { MessageService } from './_services/message.service';
import { InstantSearchGithubComponent } from './instant-search-github/instant-search-github.component';
import { RxjsLearnComponent } from './rxjs-learn/rxjs-learn.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavbarComponent,
      MainNavComponent,
      CalendarTrackerComponent,
      MessagesComponent,
      InstantSearchGithubComponent,
      RxjsLearnComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      OloMaterial,
      FormsModule,
      LayoutModule
   ],
   providers: [
      AuthService,
      MessageService,
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
