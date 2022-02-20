import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbsenceFromWorkRoutingModule } from './absence-from-work-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    AbsenceFromWorkRoutingModule
  ]
})
export class AbsenceFromWorkModule { }
