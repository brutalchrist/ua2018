import { Injectable } from '@angular/core';
import { Config } from '../../shared/config/env.config';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
/**
* This class represents the service component.
*/
@Injectable()
export class MindicadorService {
    private url: string = 'https://mindicador.cl/api/';

    constructor(private http: HttpClient) {
    }

    public getIndicators(): Observable<any> {
        return new Observable(observe => {
            this.http.get(this.url).subscribe(data => {
                observe.next(data);
                observe.complete();
            });
        });
    }
}
