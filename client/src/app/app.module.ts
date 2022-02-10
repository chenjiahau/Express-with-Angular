import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import bootstrap from 'bootstrap';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AddGreetingComponent } from './add-greeting/add-greeting.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { LogComponent } from './log/log.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FontDirective } from 'src/directives/font.directive';
import { UnlessDirective } from 'src/directives/unless.directive';

import { GreetingService } from 'src/services/greeting.service';
import { LogService } from 'src/services/log.service';
import { LogIntroComponent } from './log-intro/log-intro.component';
import { LogDetailComponent } from './log/log-detail/log-detail.component';

const appRoutes: Routes = [
  // An empty path is the path of every route
  // So redirect to greeting also redirect empty path, it doesn't work
  // It need to set pathMath to full
  { path: '', redirectTo: '/greeting', pathMatch: 'full' },
  { path: 'greeting', component: GreetingComponent },
  {
    path: 'log',
    component: LogComponent,
    children: [
      { path: '', component: LogIntroComponent },
      { path: ':id', component: LogDetailComponent }
    ]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: "/not-found" },
]


@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    AddGreetingComponent,
    SuccessMessageComponent,
    FontDirective,
    UnlessDirective,
    LogComponent,
    LogDetailComponent,
    NotFoundComponent,
    LogIntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GreetingService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
