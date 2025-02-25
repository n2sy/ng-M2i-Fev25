import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noAvatar',
  standalone: true
})
export class NoAvatarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
