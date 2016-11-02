import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ICount } from "./count";
import { LoggerService } from '../logger/logger.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class CounterService {
  loggingName: string = "counter.service";
  constructor(private _http: Http, private _loggerService: LoggerService) { }
  getCount(): Observable<ICount> {
    return this._http.get('./src/app/counter/count.json')
      .map((response) => response.json())
      .do((response) => { this._loggerService.log(JSON.stringify(response), this.loggingName) })
      .catch(this._loggerService.handleError);
  }
}