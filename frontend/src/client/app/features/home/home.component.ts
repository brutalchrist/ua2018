import { Component } from '@angular/core';

import { IndicatorsService } from '../../services/indicators/indicators.service'
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
    private indicators: any;

    constructor(private indicatorsService: IndicatorsService) {
        this.indicatorsService.getIndicatorByDate('uf', '2018').subscribe(data => {
            this.indicators = data;
            console.log('this.indicator: ', this.indicators);
        });
    }
}
