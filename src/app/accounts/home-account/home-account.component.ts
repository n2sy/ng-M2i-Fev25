import { Component } from '@angular/core';
import { AddAccountComponent } from '../add-account/add-account.component';
import { ItemAccountComponent } from '../item-account/item-account.component';

@Component({
  selector: 'app-home-account',
  standalone: true,
  imports: [AddAccountComponent, ItemAccountComponent],
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.css',
})
export class HomeAccountComponent {
  tabAccounts = [
    {
      name: 'Alex Account',
      status: 'active',
    },
    {
      name: 'Amine Account',
      status: 'inactive',
    },
  ];

  addNewAccount(newAcc) {
    this.tabAccounts.push(newAcc);
  }
}
