import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {

  arrUsers:any=[{userId:1,username:'Amol',status:'A'},
                {userId:2,username:'Akash',status:'D'},
                {userId:3,username:'Nikhl',status:'A'},
                {userId:4,username:'Rahul',status:'D'},
                {userId:5,username:'Shyam',status:'A'},
                ]

  constructor() { }

  ngOnInit(): void {
  }

}
