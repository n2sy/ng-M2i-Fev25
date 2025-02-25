import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-react-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.css',
})
export class ReactFormComponent {
  signUpForm = new FormGroup({
    username: new FormControl('nidhal', Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  submitHandler() {
    console.log(this.signUpForm.value);
  }
}
