import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  standalone: true,
  imports: [],
  templateUrl: './exp-obs.component.html',
  styleUrl: './exp-obs.component.css',
})
export class ExpObsComponent {
  myObs$: Observable<string> = new Observable((observer: Observer<string>) => {
    setTimeout(() => {
      observer.next('First Package');
    }, 1000);
    setTimeout(() => {
      observer.next('Second Package');
    }, 3000);
    setTimeout(() => {
      observer.error(new Error('Erreur décleché par nidhal'));
    }, 5000);
    setTimeout(() => {
      observer.next('Third Package');
    }, 7000);
    setTimeout(() => {
      observer.complete();
    }, 9000);
  });

  ngOnInit() {
    this.myObs$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log('Erreur détecté !!!', err);
      },
      complete: () => {
        console.log('Flux terminée');
      },
    });
  }
}
