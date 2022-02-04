import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GreetingComponent } from './greeting/greeting.component';
import { AddGreetingComponent } from './add-greeting/add-greeting.component';
import { FontDirective } from 'src/directives/font.directive';
import { UnlessDirective } from 'src/directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    AddGreetingComponent,
    FontDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
