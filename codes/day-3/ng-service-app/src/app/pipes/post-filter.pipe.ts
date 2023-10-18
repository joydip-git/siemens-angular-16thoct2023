import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(value: Post[], ...args: string[]): Post[] {
    return value.length > 0 && args[0] && args[0] != '' ?
      value.filter(
        (p) => p.title
          .toLocaleLowerCase()
          .includes(args[0].toLocaleLowerCase())
      )
      : value
  }
}
