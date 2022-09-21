import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public clients!: any;

  constructor(
    public myServices: ClientsService
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  public getClients() {
    this.myServices.getClients().pipe().subscribe((res: any) => {
      this.clients = res.clientes;
    });
  }

}
