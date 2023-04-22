import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'separatorPipe' })
export class SeparatorPipe implements PipeTransform {
  transform(value: string): string {
    return value.split(',').join(' |');
  }
}
