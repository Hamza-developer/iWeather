import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  apikey='2b749d9ce6c9ac50';
  url = '';
  constructor(public http: HttpClient) {
    this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
  }

  getWeather(city , state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map(res => res);

  } 

}
