import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarTrackerComponent } from './calendar-tracker/calendar-tracker.component';
import { InstantSearchGithubComponent } from './instant-search-github/instant-search-github.component';
import { RxjsLearnComponent } from './rxjs-learn/rxjs-learn.component';

const routes: Routes = [
  { path: 'navbarOLO', component: NavbarComponent },
  { path: 'calendarOLO', component: CalendarTrackerComponent },
  { path: 'searchOLO', component: InstantSearchGithubComponent },
  { path: 'rxjslearnOLO', component: RxjsLearnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
