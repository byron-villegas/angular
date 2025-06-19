import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CLP',
  standalone: false
})
export class ClpPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }

}
