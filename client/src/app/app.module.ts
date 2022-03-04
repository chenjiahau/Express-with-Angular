
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { FormStatusDirective } from './directives/form-status.directive';

import { AppComponent } from './app.component';
import { QuestionnairComponent } from './components/questionnair/questionnair/questionnair.component';
import { SuccessMessageComponent } from './components/success-message/success-message/success-message.component';

const appRoutes: Routes = [
  { path: '', component: QuestionnairComponent, pathMatch: 'full' },
  { path: 'success', component: SuccessMessageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormStatusDirective,
    QuestionnairComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
