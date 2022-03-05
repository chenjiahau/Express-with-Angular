import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './components/list/list.component';

import { HoverDirective } from 'src/app/directives/hover.directive';


@NgModule({
  declarations: [
    ListComponent,
    HoverDirective
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
