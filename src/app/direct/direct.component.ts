import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css',
})
export class DirectComponent {
  bgColor = 'green';
  txtColor = 'blue';

  class1 = true;
  class2 = true;

  switchClass() {
    if (this.class1) {
      this.class1 = false;
      this.class2 = true;
    } else {
      this.class2 = false;
      this.class1 = true;
    }
  }
}
