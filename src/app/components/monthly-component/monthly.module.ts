import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { MonthlyComponent } from './monthly/monthly.component';
import { MonthlyRoutingModule } from './monthly-routing.module';

@NgModule({
    declarations: [
        
    
    MonthlyComponent
  ],
    imports:[
        CommonModule,
       MonthlyRoutingModule,
        FormsModule
    ],

})
export class MonthlyModule { }