import { Pipe, PipeTransform } from '@angular/core';
/**
* This class represents the main pipe component.
*/
@Pipe({name: 'date'})
export class DatePipe implements PipeTransform {
    transform(value: string): any {
        const date = new Date(value);
        return date.toLocaleDateString();
    }
}
