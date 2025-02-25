import { Component, inject, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NoAvatarPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCand: Candidat;
  private recrueSer = inject(GestionRecruesService);

  recruterCandidat() {
    this.recrueSer.addRecrue(this.selCand);
  }
}
