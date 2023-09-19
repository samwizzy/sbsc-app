import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, len: number = 50): unknown {
    if (value.length > len) {
      return value.substring(0, len) + '...';
    }
    return value;
  }
}
