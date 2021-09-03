import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'exponent'
})

export class ExponentPipe implements PipeTransform {

  transform(value: number, exponent?:number): null {
    return null;
    //Math.pow(value, isNaN(exponent) ? 1 : exponent)
  }

}
