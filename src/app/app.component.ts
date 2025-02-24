import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'm2i-fev-25';

  lireLettre(lettre) {
    console.log(lettre);
  }
}
