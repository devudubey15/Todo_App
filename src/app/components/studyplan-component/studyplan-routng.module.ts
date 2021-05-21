import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyplanComponent} from './studyplan/studyplan.component'
const routes: Routes = [
    { path:'', redirectTo:'studyplan-activity', pathMatch:'full'},
    { path:'studyplan-activity', component:StudyplanComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyplanRoutingModule { }