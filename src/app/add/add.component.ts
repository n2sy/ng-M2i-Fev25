import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  private candSer = inject(GestionCandidatsService);
  private router = inject(Router);
  showError = false;
  isSubmitted = false;

  submitHandler(formValue, e) {
    // console.log(e.target[4].files[0]);
    this.isSubmitted = true;
    let formData = new FormData();
    formData.append('avatar', e.target[4].files[0]);
    this.candSer.uploadAvatar(formData).subscribe({
      next: (response) => {
        formValue.avatar = response['fileName'];
        this.candSer.addCandidatAPI(formValue).subscribe({
          next: (response) => {
            alert(response['message']);
            this.router.navigateByUrl('/cv');
          },
          error: (err) => {
            this.showError = true;
            console.log("Erreur avec l'ajout d'un candidat");
          },
        });
      },
      error: (err) => {
        console.log("Erreur avec l'upload d'un avatar");
      },
    });
  }
}
