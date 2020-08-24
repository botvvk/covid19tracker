import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { District } from '../district-wise/district';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url = "https://api.covidindiatracker.com/state_data.json"
  constructor(private http: HttpClient) { }

  getTotalData() {
    return this.http.get("https://api.covidindiatracker.com/total.json")
  }

  getData() {
    return this.http.get(this._url)
  }

  getDistrictDAta(): Observable<District[]> {
    return this.http.get<District[]>("https://api.covid19india.org/v2/state_district_wise.json")  
    }
  }



