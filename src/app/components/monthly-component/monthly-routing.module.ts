import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyComponent } from './monthly/monthly.component';

const routes: Routes = [
    { path:'', redirectTo:'monthly-activity', pathMatch:'full'},
    { path:'monthly-activity',component:MonthlyComponent}   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthlyRoutingModule { }