import { Pipe, PipeTransform } from '@angular/core';

import { format } from 'date-fns'

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    let formatString = 'MM/dd/yyyy';
    args[0] && (formatString = args[0]);
    return format(value, formatString);
  }

}
