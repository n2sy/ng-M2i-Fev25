import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  langageParDefaut = 'php';
  monCommentaire = 'RAS...';
  submitHandler(f) {
    console.log(f.value);
  }

  resetHandler(f: NgForm) {
    f.reset();
  }
}
