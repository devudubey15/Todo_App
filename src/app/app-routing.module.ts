import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'today', pathMatch:'full'},
  {
    path:'today', 
    loadChildren: () => import('./components/today-component/today.module').then(m => m.TodayModule)
  },
  {
    path:'week',
    loadChildren: () => import('./components/weekly-component/weekly.module').then(m => m.WeeklyModule)
  },
  {
    path:'month',
    loadChildren: () => import('./components/monthly-component/monthly.module').then(m => m.MonthlyModule)
  },
  {
    path:'holiday',
    loadChildren: () => import('./components/holiday-component/holiday.module').then(m => m.HolidayModule)
  },
  {
    path:'studyplan',
    loadChildren: () => import('./components/studyplan-component/studyplan.module').then(m => m.StudyplanModule)
  },
  {
    path:'timetable',
    loadChildren: () => import('./components/timetable-component/timetable.module').then(m => m.TimetableModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
