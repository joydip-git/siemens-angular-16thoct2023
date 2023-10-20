import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], ...args: string[]): Product[] {
    return value.length > 0 && args[0] && args[0] != '' ?
      value.filter(
        (p) => p.productName
          .toLocaleLowerCase()
          .includes(args[0].toLocaleLowerCase())
      )
      : value
  }

}
