import { Pipe, PipeTransform } from '@angular/core';
/**
 * Reverses an array
 * Takes an array and reverses the order of the values.
 * Usage:
 *   let item of value | reverse
 * Example:
 *   {{ [1, 2, 3] | reverse }}
 *   formats to: [3, 2, 1]
 */
@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any) {
    return value.slice().reverse();
  }
}
