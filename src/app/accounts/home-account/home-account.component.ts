import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  standalone: true,
  imports: [],
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.css',
})
export class HomeAccountComponent {
  tabAccounts = [
    {
      name: 'Alex Account',
      statut: 'active',
    },
    {
      name: 'Amine Account',
      statut: 'inactive',
    },
  ];
}
