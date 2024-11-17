import { Pipe, PipeTransform } from '@angular/core';
import { Rate } from '../models/product.model';

@Pipe({
  name: 'currency',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: Rate, targetCurrency: string): number {
    if (targetCurrency === 'USD') {
        return value.dollar;
    } else if (targetCurrency === 'NIS') {
        return value.nis;
    } else {
        return 0;
    }
  }
}



