import { Component, OnInit } from '@angular/core';
import {Data2Service} from '../assign10907.data2.service'

@Component({
  selector: 'app-assign1.30907',
  templateUrl: './assign1.30907.component.html',
  styleUrls: ['./assign1.30907.component.css']
})
export class Assign1.30907Component implements OnInit {
  staticmod2:string="";
  constructor() { }

  ngOnInit(): void {
    const Result1=Data2Service.staticMod;
    this.staticmod2=Result1;
  }

}
