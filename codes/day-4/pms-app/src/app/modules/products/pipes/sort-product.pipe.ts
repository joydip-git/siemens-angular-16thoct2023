import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'sortProduct'
})
export class SortProductPipe implements PipeTransform {

  transform(value: Product[], ...args: string[]): Product[] {
    if (args[0] && args[0] != '') {
      switch (args[0]) {
        case 'name':
          return value.sort((p1, p2) => p1.productName.toLocaleLowerCase().localeCompare(p2.productName.toLocaleLowerCase()))

        case 'price':
          return value.sort((p1, p2) => p1.price - p2.price)

        case 'rating':
          return value.sort((p1, p2) => p1.starRating - p2.starRating)

        default:
          return value
      }
    } else
      return value
  }

}
