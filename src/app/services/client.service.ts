import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  onClientsChange = new Subject();

  constructor(private httpClient: HttpClient) {
  }


  getClients() {
    this.httpClient.get('http://localhost:8080/juice/getAllJuices')
      .subscribe((clients) => {
      this.onClientsChange.next(clients);
      })

  }
}
