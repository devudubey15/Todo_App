import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
    { path:'', redirectTo:'today-activity', pathMatch:'full'},
    { path:'today-activity', component:TodayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodayRoutingModule { }