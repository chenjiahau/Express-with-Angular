import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GreetingComponent } from './greeting/greeting.component';
import { LogComponent } from './log/log.component';
import { LogIntroComponent } from './log/log-intro/log-intro.component';
import { LogDetailComponent } from './log/log-detail/log-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      message: 'Page not found'
    }
  },
  { path: '**', redirectTo: "/not-found" },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{
}