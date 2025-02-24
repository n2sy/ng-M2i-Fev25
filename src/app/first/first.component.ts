import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule, SecondComponent],
  templateUrl: './first.component.html',
})
export class FirstComponent {
  prenom: string = 'nidhal';
  nom: string = 'jelassi';
  couleurPrefere = 'blue';
  hd = true;

  clickHandler() {
    alert("J'ai été cliqué");
  }

  changeValueInput(inp: any) {
    this.prenom = inp.value;
  }

  lireLettre(lettre) {
    alert(lettre);
  }
}
