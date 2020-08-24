import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  public doughnutChartLabels = ['Confirmed', 'Active', 'Deaths', 'Recovered'];
  public doughnutChartData = []
  public doughnutChartType = 'doughnut';
  districtName: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.districtName = this.route.snapshot.paramMap.get('district')
    let confirmed = parseInt(this.route.snapshot.paramMap.get('confirmed'))
    let active = parseInt(this.route.snapshot.paramMap.get('active'))
    let deceased = parseInt(this.route.snapshot.paramMap.get('deceased'))
    let recovered = parseInt(this.route.snapshot.paramMap.get('recovered'))


    this.doughnutChartData.push(confirmed, active, deceased, recovered)
  }


}
