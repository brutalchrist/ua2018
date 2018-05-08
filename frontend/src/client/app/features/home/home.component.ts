import { Component } from '@angular/core';

import { IndicatorService } from '../../services/indicator/indicator.service';
/**
* This class represents the main application component.
*/
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent {
    private years = [2018, 2017, 2016, 2015, 2014, 2013, 2012];
    private loading = false;
    private year = 2018;
    private uf: any;

    constructor(private indicatorService: IndicatorService) {}

    private getUf() {
        this.uf = null;
        this.loading = true;
        this.indicatorService.getUfByYear(this.year).subscribe(data => {
            this.uf = data;
            this.loading = false;
        });
    }

    private setYear(year: number) {
        this.year = year;
    }
}
