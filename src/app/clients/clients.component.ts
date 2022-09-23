import { ClientDialogComponent } from './../shared/client-dialog/client-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public clients!: any;

  constructor(
    private myServices: ClientsService,
    private clientDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  public getClients() {
    this.myServices.getClients().pipe().subscribe((res: any) => {
      this.clients = res.clientes;
    });
  }

  public openClientDetails(client: any){
    this.clientDialog.open(ClientDialogComponent,{
      width: '650px',
      height: 'fit-content',
      data: client
    });
  }

}
