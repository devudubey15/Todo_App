import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { HolidayComponent } from './holiday/holiday.component';
import { HolidayRoutingModule } from './holiday-routing.module';

@NgModule({
    declarations: [
        
    
    HolidayComponent
  ],
    imports:[
        CommonModule,
       HolidayRoutingModule,
        FormsModule
    ],

})
export class HolidayModule { }