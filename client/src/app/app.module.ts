import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import bootstrap from 'bootstrap';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AddGreetingComponent } from './add-greeting/add-greeting.component';
import { SuccessMessageComponent } from './success-message/success-message.component';

import { AppRoutingModule } from './app-routing.module';

import { FontDirective } from 'src/directives/font.directive';
import { UnlessDirective } from 'src/directives/unless.directive';

import { GreetingService } from 'src/services/greeting.service';
import { LogService } from 'src/services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    AddGreetingComponent,
    SuccessMessageComponent,
    FontDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GreetingService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
