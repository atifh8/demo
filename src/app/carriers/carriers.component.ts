import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CaarierserviceService } from './caarierservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
export interface CardCarriers {
  "carrierId": string;
  "carrierTitle": string;
  "modifiedDate": string
  "modifiedBy": string;
  "version": string;
  "currentState": string;
  "lock": boolean;
}

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.css']
})



export class CarriersComponent implements OnInit {
  isFetching: boolean = false;
  carrierList = [];
  length: number;
  loading: boolean = false;
  dataSource = new MatTableDataSource<CardCarriers>([])
  displayedColumns: string[] = ['carrierTitle', 'modifiedDate', 'modifiedBy', 'version', 'currentState'];
  constructor(private carrier: CaarierserviceService, private _snackBar: MatSnackBar, private router: Router) {

  }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
      this.getCarriersList();

    }, 1000);
    this.isFetching = false;

  }
  getRecord(record: any) {
    console.log(record);

  }
  getCarriersList() {
    this.isFetching = true
    this.showNotification();
    this.dataSource = this.carrier.getCarriers() as any;
    this.isFetching = false;
  }

  showNotification() {
    this._snackBar.open('data fetched successfully', 'Ok', {
      duration: 2000,
      verticalPosition: 'top',
    });
  }

}
