import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @Input({ required: true }) txtColor;
  @Output() eventToParent = new EventEmitter(); // enveloppe

  declencherEvent() {
    this.eventToParent.emit('Bonjour, je suis votre enfant !');
  }
}
