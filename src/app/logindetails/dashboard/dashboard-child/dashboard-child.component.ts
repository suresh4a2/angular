import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.css']
})
export class DashboardChildComponent {

  @Input() res:any
  
  @Output() event1:any = new EventEmitter()
 
  public item=[
   {
     name:"React",
     fee:18000
   },
   {
    name: "Angular",
    fee: 20000
   }
  ]
 
  send1(){
 this.event1.emit(this.item)
  }
 }