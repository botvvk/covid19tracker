import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StateWiseDetailsComponent } from './state-wise-details/state-wise-details.component';
import { TotalDataComponent } from './total-data/total-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DistrictWiseComponent } from './district-wise/district-wise.component';
import { AboutComponent } from './about/about.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { DropdownDirective } from './directive/dropdown.directive';
import { OrderByPipe } from './shared/pipe/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StateWiseDetailsComponent,
    TotalDataComponent,
    PageNotFoundComponent,
    DistrictWiseComponent,
    AboutComponent,
    DoughnutChartComponent,
    DropdownDirective,
    OrderByPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
