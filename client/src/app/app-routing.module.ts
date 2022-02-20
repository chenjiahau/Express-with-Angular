import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'members',
    loadChildren: () =>
      import('./members/members.module').then(m => m.MembersModule)
  },
  {
    path: 'afwork',
    loadChildren: () =>
      import('./absence-from-work/absence-from-work.module').then(m => m.AbsenceFromWorkModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: '**',
    redirectTo: '/members'
  },
];

export const appRouting = RouterModule.forRoot(routes);
