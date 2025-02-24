import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allStatus = ['', 'active', 'inactive', 'unknown'];
  @Output() eventToHomeAccount = new EventEmitter();

  onAddAccount(nameValue, statusValue) {
    this.eventToHomeAccount.emit({
      name: nameValue,
      status: statusValue,
    });
  }
}
