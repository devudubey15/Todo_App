import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-studyplan',
  templateUrl: './studyplan.component.html',
  styleUrls: ['./studyplan.component.css']
})
export class StudyplanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addVar=false;
  editVar=false;
  
  index=0;
  subject=null;
  starttime=null;
  endtime=null;

  studyPlan:any=[
    
  ]
  editActivity(index:any){
    this.editVar=true;
    this.addVar=true;
    this.index=index;
  }
  deleteActivity(index:any){
    this.studyPlan.splice(index,1);

  }
  addActivity(){
    
    this.addVar=true;
    this.editVar=false;
  }

  saveAddedActivity(){
    if( this.subject == null && this.starttime == null && this.endtime == null){
      return
    }else{
      this.studyPlan.push({ subject:this.subject,starttime:this.starttime,endtime:this.endtime});
    this.addVar = false;
    
    this.subject = null; 
    this.starttime=null;
    this.endtime=null;

    }
  }
    saveEditedActivity(){
      this.addVar=false;
      this.editVar=false;
    }
  
 
}
