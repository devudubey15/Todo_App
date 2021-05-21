import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklyComponent } from './weekly/weekly.component';

const routes: Routes = [
    { path:'', redirectTo:'weekly-activity', pathMatch:'full'},
    { path:'weekly-activity',component:WeeklyComponent}   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeeklyRoutingModule { }