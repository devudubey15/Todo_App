import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  editactivity=false;
  addActivity = false;
  title= null;
  index=0;
  description = null ;

   todayActivity:any =[
     
    
   ]

   addActivityShow(){
     this.addActivity = true;
   }
    addActivityData(){
      if(this.title == null && this.description == null){
        return
      }else{
        this.todayActivity.push({title:this.title, description:this.description});
      this.addActivity = false;
      this.title =null;
      this.description = null; 
      }
    }

    editActivity(index:any){
      this.editactivity = true;
      this.addActivity = true;
      this.index = index;

    }

    editActivityData(){
      this.addActivity = false;
      this.editactivity = false;
    }

    deleteActivity(index:any){
      this.todayActivity.splice(this.index,1);
      
    }
}
