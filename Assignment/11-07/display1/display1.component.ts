import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  template: '<h3>This is Display1 Component</h3>',
  styles: ['h3 {color:red}']
})
export class Display1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
