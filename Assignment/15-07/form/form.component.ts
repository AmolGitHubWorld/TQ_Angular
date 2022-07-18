import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  frmClient: any;
  constructor() { }
  ngOnInit(): void {
    this.frmClient = new FormGroup(
      {
        id: new FormControl("", [Validators.required, Validators.minLength(6)]),
        clientname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        address: new FormControl("", Validators.required),
        phone: new FormControl("", [Validators.required, Validators.pattern('^[0-9]+$')])
      }
    )
  }
  onSubmit(clientForm: any) {
    console.log(this.frmClient.status);
  }
}
