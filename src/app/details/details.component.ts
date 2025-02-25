import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NoAvatarPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCand: Candidat;
}
