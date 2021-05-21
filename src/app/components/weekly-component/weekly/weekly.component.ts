import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title=null;
  description=null;
  day=null;
  addVar=false;
  editVar=false;
  index=0;

  dailyActivity:any=[
    // {title:'',description:'',day:''}
  ]

  AddActivity(){
    this.editVar=false;
    this.addVar=true;
    
  }
  saveAddedActivity(){
    if(this.title == null && this.description == null && this.day == null){
      return
    }
    else{
      this.dailyActivity.push({title:this.title, description:this.description, day:this.day});
    this.addVar = false;
    this.title =null;
    this.description = null; 
    }
  }
  editActivity(index:number){
    this.addVar=true;
    this.editVar=true;
    this.index=index;
  }
  saveEditedActivity(){
    this.addVar=false;
    this.editVar=false;
  }
  deleteActivity(index:number){
    this.dailyActivity.splice(this.index,1);
      
  }

}
