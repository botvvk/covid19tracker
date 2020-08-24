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

  constructor(private dataService: DataService, private router: Router) { }


  ngOnInit(): void {
    this.stateDistrictData();
  }
  

  stateDistrictData() {
    this.dataService.getData().subscribe(response => {

      console.log(response)
      this.stateData = response
    })
  }
  getState(state) {
    this.router.navigate(['/state', state])
  }
}
