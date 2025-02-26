import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  showLogin: boolean = true;
  showError: boolean = false;
  private authSer = inject(AuthService);
  private router = inject(Router);
  submitHandler(f) {
    console.log(f.value);
  }

  resetHandler(f: NgForm) {
    f.reset();
  }

  toggleShowLogin() {
    this.showLogin = !this.showLogin;
  }

  registerHandler(identifiants) {
    this.authSer.inscription(identifiants).subscribe({
      next: (response) => {
        alert(response['message']);
        this.toggleShowLogin(); // this.showLogin = true;
      },
      error: (err) => {
        console.log("Problème avec l'inscription de l'utilisateur");
      },
    });
  }

  loginHandler(f: NgForm) {
    this.authSer.seConnecter(f.value).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response['token']);
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        this.showError = true;
        f.reset();
      },
    });
  }
}
