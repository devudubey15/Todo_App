import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { TimetableComponent } from './timetable/timetable.component';
import { TimeTableRoutingModule } from './timetable-routing.module';

@NgModule({
    declarations: [
        
    
    TimetableComponent
  ],
    imports:[
        CommonModule,
       TimeTableRoutingModule,
        FormsModule
    ],

})
export class TimetableModule { }