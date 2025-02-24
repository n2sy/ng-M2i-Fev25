import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first.component.html',
})
export class FirstComponent {
  prenom: string = 'nidhal';
  nom: string = 'jelassi';
  couleurPrefere = 'yellow';
  hd = true;

  clickHandler() {
    alert("J'ai été cliqué");
  }

  changeValueInput(inp: any) {
    this.prenom = inp.value;
  }
}
