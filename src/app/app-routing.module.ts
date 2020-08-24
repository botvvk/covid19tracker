import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateWiseDetailsComponent } from './state-wise-details/state-wise-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DistrictWiseComponent } from './district-wise/district-wise.component';
import { AboutComponent } from './about/about.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';


const routes: Routes = [
  { path: 'state', component: StateWiseDetailsComponent },
  { path: '', redirectTo: '/state', pathMatch: 'full' },
  { path: 'state/:stateName', component: DistrictWiseComponent },
  { path: 'state/:stateName/:district/:confirmed/:active/:deceased/:recovered', component: DoughnutChartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'chart', component: DoughnutChartComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
