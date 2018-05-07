import { Injectable } from '@angular/core';
import { Config } from '../../shared/config/env.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
/**
* This class represents the service component.
*/
@Injectable()
export class IndicatorsService {
    private url: string;

    constructor(private http: HttpClient) {
        this.url = 'https://mindicador.cl/api/';
    }

    public getIndicators(): Observable<any> {
        return new Observable(observe => {
            this.http.get(this.url).subscribe(data => {
                // console.log('data: ', data);
                observe.next(data);
                observe.complete();
            });
        });
    }

    public getIndicatorByDate(indicator: string, date: string): Observable<any> {
        return new Observable(observe => {
            this.http.get(this.url + indicator + '/' + date).subscribe(data => {
                observe.next(data);
                observe.complete();
            });
        });
    }
}
