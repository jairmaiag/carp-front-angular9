import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simNao'
})
export class SimNaoPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value ? 'Sim' : 'Não';
  }

}
