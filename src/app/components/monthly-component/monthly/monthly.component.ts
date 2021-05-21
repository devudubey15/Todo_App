import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title=null;
  description=null;
  date=null;
  addVar=false;
  editVar=false;
  index=0;

  weeklyActivity:any=[
    {title:'',description:'',date:''}
  ]

  AddActivity(){
    this.editVar=false;
    this.addVar=true;
    
  }
  saveAddedActivity(){
    if(this.title == null && this.description == null && this.date == null){
      return
    }
    else{
      this.weeklyActivity.push({title:this.title, description:this.description, date:this.date});
    this.addVar = false;
    this.title =null;
    this.description = null; 
    this.date=null;
    }
  }
  editActivity(index:any){
    this.addVar=true;
    this.editVar=true;
    this.index=index;
  }
  saveEditedActivity(){
    this.addVar=false;
    this.editVar=false;
  }
  deleteActivity(index:number){
    this.weeklyActivity.splice(this.index,1);
      
  }
 


}