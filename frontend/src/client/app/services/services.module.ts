import { NgModule } from '@angular/core';
import { MindicadorService } from './mindicador/mindicador.service';
import { IndicatorsService } from './indicators/indicators.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/**
* Especificamos el modulo
*/

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [],
    providers:[IndicatorsService, MindicadorService],
    exports: [CommonModule, FormsModule, RouterModule]
})
export class ServicesModule {
}
