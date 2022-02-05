import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from 'bootstrap';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GreetingComponent } from './greeting/greeting.component';
import { AddGreetingComponent } from './add-greeting/add-greeting.component';
import { FontDirective } from 'src/directives/font.directive';
import { UnlessDirective } from 'src/directives/unless.directive';
import { SuccessMessageComponent } from './success-message/success-message.component';

import { GreetingService } from 'src/services/greeting.service';
import { logService } from 'src/services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    AddGreetingComponent,
    SuccessMessageComponent,
    FontDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [GreetingService, logService],
  bootstrap: [AppComponent]
})
export class AppModule { }
