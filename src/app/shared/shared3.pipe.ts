import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shared3'
})
export class Shared3Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}