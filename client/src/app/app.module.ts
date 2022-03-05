
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { FormStatusDirective } from './directives/form-status.directive';

import { SuccessGuardService } from './services/success-guard.service';

import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire/questionnaire.component';
import { SuccessMessageComponent } from './components/success-message/success-message/success-message.component';
import { ListGuardService } from './modules/list/components/services/list-guard.service';
import { DirectivesDirective } from './directives.directive';
import { ModalComponent } from './components/share/modal/modal.component';

const appRoutes: Routes = [
  { path: '', component: QuestionnaireComponent, pathMatch: 'full' },
  {
    path: 'success',
    // canActivate: [SuccessGuardService],
    component: SuccessMessageComponent,
  },
  {
    path: 'list',
    // canLoad: [ListGuardService],
    loadChildren: () =>
      import('./modules/list/list.module').then(m => m.ListModule)
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormStatusDirective,
    QuestionnaireComponent,
    SuccessMessageComponent,
    DirectivesDirective,
    ModalComponent
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
