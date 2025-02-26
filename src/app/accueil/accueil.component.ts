import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExpObsComponent } from '../exp-obs/exp-obs.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink, ExpObsComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  constructor(private router: Router) {}

  goToServers() {
    this.router.navigateByUrl('/servers');
  }

  goToAccounts() {
    this.router.navigate(['accounts']);
  }
}
