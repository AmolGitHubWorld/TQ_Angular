import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  data1:string="Angular class Fees";
  traningFee:number=100000;
  todayDate= new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
