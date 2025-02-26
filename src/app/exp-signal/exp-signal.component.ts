import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-exp-signal',
  standalone: true,
  imports: [],
  templateUrl: './exp-signal.component.html',
  styleUrl: './exp-signal.component.css',
})
export class ExpSignalComponent {
  framework = signal('angular');
  count = signal(0);
  produitCount = computed(() => this.count() * 100);

  constructor() {
    effect(() => {
      console.log(
        'La valeur du signal framework est passé à ' + this.framework()
      );
    });
  }

  changeSignal() {
    this.framework.set('React');
  }

  changeSignalV2() {
    this.framework.update((previousValue) => previousValue + ' et Vue.Js');
  }

  increment() {
    this.count.update((previousValue) => previousValue + 1);
  }
}
