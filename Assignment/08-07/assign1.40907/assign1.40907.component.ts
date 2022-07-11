import { Component, OnInit } from '@angular/core';
import { Data3Service} from '../assign10907.data3.service';
@Component({
  selector: 'app-assign1.40907',
  templateUrl: './assign1.40907.component.html',
  styleUrls: ['./assign1.40907.component.css']
})
export class Assign1.40907Component implements OnInit {
privatemod2:string="";
  constructor(private data3:Data3Service) { }

  ngOnInit(): void {
    const Result3 = this.data3.msgNotify();
    this.privatemod2=result3;
  }

}
