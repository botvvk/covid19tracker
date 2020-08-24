import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { District } from './district';

@Component({
  selector: 'app-district-wise',
  templateUrl: './district-wise.component.html',
  styleUrls: ['./district-wise.component.css']
})
export class DistrictWiseComponent implements OnInit {

  public districts
  public stateName;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.districtWiseInfo();


  }

  districtWiseInfo() {
    this.dataService.getDistrictDAta()
      .subscribe(data => {
        let state = this.route.snapshot.paramMap.get('stateName');
        this.stateName = state

        const districtList = data.filter(function (item) {
          return item.state == state
        })
        this.districts = districtList[0]["districtData"]
        console.log(this.districts)
      })
  };

  onSelect(name, confirmed, active, deceased,recovered) {
    this.router.navigate(['/state/:stateName', name, confirmed, active, deceased,recovered])
  }


}
