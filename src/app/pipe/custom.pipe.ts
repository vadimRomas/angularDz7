import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const firstArg = args[0];
    for (let i = 0; i < firstArg; i++) {
        value += '.';
      }
    return value;
  }
}
