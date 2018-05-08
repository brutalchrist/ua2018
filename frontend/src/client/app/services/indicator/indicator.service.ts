import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { HashTable } from '../../classes/hashtable';
import { Config } from '../../shared/config/env.config';
/**
* This class represents the service component.
*/
@Injectable()
export class IndicatorService {
    private url = 'https://mindicador.cl/api';
    private data: HashTable<number, any>;

    constructor(private http: HttpClient) {
        this.data = new HashTable<number, any>();
    }

    public getUfByYear(year: number): Observable<any> {
        return new Observable(observe => {
            if (this.data.has(year)) {
                console.log('getting from memory');
                observe.next(this.data.get(year));
                observe.complete();
            } else {
                this.http.get(`${this.url}/uf/${year}`).subscribe(data => {
                    console.log(`consuming ${this.url}/uf/${year}`);
                    this.data.put(year, data);
                    observe.next(data);
                    observe.complete();
                });
            }
        });
    }
}
