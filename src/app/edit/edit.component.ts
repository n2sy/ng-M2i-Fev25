import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  candidatAEditer: Candidat;
  private actRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.candidatAEditer = this.candSer.getCandidatById(id);
  }
  submitHandler(formValue) {
    formValue._id = this.candidatAEditer._id;
    this.candSer.updateCandidat(formValue);
    this.router.navigateByUrl('/cv');
  }
}
