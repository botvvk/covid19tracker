import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';


@Component({
  selector: 'app-total-data',
  templateUrl: './total-data.component.html',
  styleUrls: ['./total-data.component.css']
})
export class TotalDataComponent implements OnInit {

  totalCases: number;
  recovered: number;
  activeCases: number;
  deaths: number;

  cchanges// cChanges --> Daily changes in Confirmed Cases

  rchanges// rChanges --> Daily changes in Recovery Cases

  dchanges// dChanges --> Daily changes in Death Cases

  aChanges// dChanges --> Daily changes in active Cases




  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.dataservice.getTotalData()
      .subscribe(response => {

        this.totalCases = response['confirmed']
        this.deaths = response['deaths']
        this.recovered = response['recovered']
        this.activeCases = response['active']
        this.dchanges = response['dchanges']
        this.cchanges = response['cchanges']
        this.rchanges = response['rchanges']
        this.aChanges = response['aChanges']

      })
  }
}
