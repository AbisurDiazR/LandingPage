import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.scss']
})
export class ClientDialogComponent implements OnInit {
  public endDate!: any;
  public startDate!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ClientDialogComponent>
  ) { }

  ngOnInit(): void {
    moment.locale('es');
    this.endDate = moment(this.data.to.toDate()).format("MMM YYYY");
    this.startDate = moment(this.data.from.toDate()).format("MMM YYYY");
  }

  public close(){
    this.dialogRef.close();
  }

}
