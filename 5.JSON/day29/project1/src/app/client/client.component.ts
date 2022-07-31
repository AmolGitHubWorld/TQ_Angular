import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
clientData:any=[];
  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
    this.clientService.GetAllClient().subscribe((data:any)=>{
      this.clientData = data;
    })
  }

}
