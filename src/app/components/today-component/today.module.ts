import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { TodayRoutingModule } from './today-routing.module';
import { TodayComponent } from './today/today.component';

@NgModule({
    declarations: [
        TodayComponent
    ],
    imports:[
        CommonModule,
        TodayRoutingModule,
       
        FormsModule
    ],

})
export class TodayModule { }