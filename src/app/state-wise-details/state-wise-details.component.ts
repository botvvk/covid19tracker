import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-state-wise-details',
  templateUrl: './state-wise-details.component.html',
  styleUrls: ['./state-wise-details.component.css']
})
export class StateWiseDetailsComponent implements OnInit {

  stateData
  orderby: string = 'TotalCases'

  constructor(private dataService: DataService, private router: Router) { }


  ngOnInit(): void {
    this.stateDistrictData();
  }


  stateDistrictData() {
    this.dataService.getData().subscribe(response => {
      this.stateData = response
      if (this.orderby == 'name') {
        this.stateData.sort(function compare(a, b) {
          if (a.state <= b.state) {
            return -1;
          }
          else {
            return 1;
          }
          // a must be equal to b
          return 0;
        });

      }
      else {
        this.stateData.sort(function (a, b) {

          return parseInt(b.confirmed) - parseInt(a.confirmed);
        })
      }


    })
  }
  getState(state) {
    this.router.navigate(['/state', state])
  }
  onSelect(orderType) {
    this.orderby = orderType
    this.stateDistrictData()
  }

}
