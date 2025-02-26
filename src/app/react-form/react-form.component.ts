import { Component } from '@angular/core';
import {
  FormArray,
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
    skills: new FormArray([]),
  });

  get formSkills() {
    return <FormArray>this.signUpForm.get('skills');
  }

  addSkill() {
    let newCtrl = new FormControl(null, Validators.required);
    this.formSkills.push(newCtrl);
  }

  submitHandler() {
    console.log(this.signUpForm.value);
  }
}
