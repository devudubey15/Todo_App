import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimetableComponent } from './timetable/timetable.component';

const routes: Routes = [
    { path:'', redirectTo:'timetable-activity', pathMatch:'full'},
    { path:'timetable-activity',component:TimetableComponent}   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTableRoutingModule { }