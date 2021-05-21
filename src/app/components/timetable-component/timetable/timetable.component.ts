import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addVar=false;
  editVar=false;
  
  index=0;
  plan=null;
  starttime=null;
  endtime=null;

  timetable:any=[
    {plan:'',starttime:'',endtime:''}
  ]
  addInTable(){
    this.addVar=true;
    this.editVar=false;
    
  }
  editInTable(index:any){
    this.addVar=true;
    this.editVar=true;
    this.index=index;
  }
  deleteInTable(index:any){
    this.timetable.splice(index,1);
  }

  saveAddedActivity(){
    if( this.plan == null && this.starttime == null && this.endtime == null){
      return
    }else{
      this.timetable.push({ plan:this.plan,starttime:this.starttime,endtime:this.endtime});
    this.addVar = false;
    
    this.plan = null; 
    this.starttime=null;
    this.endtime=null;

    }
  }
    saveEditedActivity(){
      this.addVar=false;
      this.editVar=false;
    }
}
