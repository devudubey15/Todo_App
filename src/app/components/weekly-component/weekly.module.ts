import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { WeeklyComponent } from './weekly/weekly.component';
import { WeeklyRoutingModule } from './weekly-routing.module';

@NgModule({
    declarations: [
        
    
    WeeklyComponent
  ],
    imports:[
        CommonModule,
       WeeklyRoutingModule,
        FormsModule
    ],

})
export class WeeklyModule { }