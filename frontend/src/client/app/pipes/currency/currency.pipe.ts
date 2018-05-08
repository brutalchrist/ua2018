import { Pipe, PipeTransform } from '@angular/core';
/**
* This class represents the main pipe component.
*/
@Pipe({name: 'currency'})
export class CurrencyPipe implements PipeTransform {
    transform(value: string): any {
        return `$${value}`;
    }
}
