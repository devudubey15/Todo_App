import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayComponent } from './holiday/holiday.component';

const routes: Routes = [
    { path:'', redirectTo:'holiday-activity', pathMatch:'full'},
    { path:'holiday-activity',component:HolidayComponent}   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRoutingModule { }