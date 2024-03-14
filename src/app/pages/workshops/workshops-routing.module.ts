import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopsPageComponent } from './components/workshops-page/workshops-page.component';

const routes: Routes = [{  path: '', component: WorkshopsPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopsRoutingModule { }
