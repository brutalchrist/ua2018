import { NgModule } from '@angular/core';
import { DatePipe } from './date/date.pipe';
import { CurrencyPipe } from './currency/currency.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
/**
* Especificamos el modulo
*/

@NgModule({
    imports: [CommonModule, RouterModule, SharedModule],
    declarations: [CurrencyPipe, DatePipe],
    exports: [CommonModule, FormsModule, RouterModule, CurrencyPipe, DatePipe]
})
export class PipesModule {
}
