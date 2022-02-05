import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import bootstrap from 'bootstrap';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AddGreetingComponent } from './add-greeting/add-greeting.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { LogComponent } from './log/log.component';

import { FontDirective } from 'src/directives/font.directive';
import { UnlessDirective } from 'src/directives/unless.directive';

import { GreetingService } from 'src/services/greeting.service';
import { LogService } from 'src/services/log.service';


const appRoutes: Routes = [
  { path: '', component: GreetingComponent },
  { path: 'log', component: LogComponent }
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GreetingService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
