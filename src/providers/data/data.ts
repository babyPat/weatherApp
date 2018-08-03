import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  
  getData(place:string){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+place+'&APPID=81e77e06e0b12566b2141400e68ba8fb');
    
    
}

}
