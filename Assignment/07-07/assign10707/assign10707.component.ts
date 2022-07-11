import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign10707',
  templateUrl: './assign10707.component.html',
  styleUrls: ['./assign10707.component.css']
})
export class Assign10707Component implements OnInit {
  colorSet:string="";
  constructor() { }
  ngOnInit(): void {
  }
  
  onRed()
  {
    this.colorSet = "Red"
  }

  onBlue()
  {
    this.colorSet = "Blue"
  }

  onGreen()
  {
    this.colorSet = "Green"
  }
}
