import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { StudyplanRoutingModule } from './studyplan-routng.module';
import { StudyplanComponent } from './studyplan/studyplan.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [
        
    
    
  
    StudyplanComponent
  ],
    imports:[
        CommonModule,
        StudyplanRoutingModule,
        FormsModule,
        FontAwesomeModule
    ],

})
export class StudyplanModule { }