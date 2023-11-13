import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{



  clients:any = [];

  constructor(private clientService:ClientService){}

  ngOnInit(): void {

    this.clientService.onClientsChange.subscribe((clients)=>{
    this.clients = clients;
    })

  }

  getClients(){

    this.clientService.getClients();
  }

}
