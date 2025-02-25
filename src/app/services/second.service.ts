import { Injectable } from '@angular/core';
import { FirstService } from './first.service';

@Injectable()
export class SecondService {
  constructor(private firstSer: FirstService) {}

  bonjour() {
    console.log('Je suis le second Service');
    this.firstSer.afficherInfos();
  }
}
