import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-account',
  standalone: true,
  imports: [],
  templateUrl: './item-account.component.html',
  styleUrl: './item-account.component.css',
})
export class ItemAccountComponent {
  @Input() oneAccount;

  changeStatus(newStatus) {
    this.oneAccount.status = newStatus;
  }
}
