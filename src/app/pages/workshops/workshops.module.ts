import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { WorkshopsPageComponent } from './components/workshops-page/workshops-page.component';
import { WorkshopsRoutingModule } from './workshops-routing.module';


@NgModule({
  declarations: [
    WorkshopsPageComponent
  ],
  imports: [
    CommonModule,
    WorkshopsRoutingModule,
    SharedModule
  ]
})
export class WorkshopsModule { }
