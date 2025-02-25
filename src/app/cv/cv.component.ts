import { Component, inject } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { FirstComponent } from '../first/first.component';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { SecondService } from '../services/second.service';
import { RecruterComponent } from '../recruter/recruter.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailsComponent, RecruterComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [SecondService],
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCandidate: Candidat;

  recupererCandidatSelectionne(cand) {
    this.selectedCandidate = cand;
  }

  // 1ere manière d 'injecter une dépendance
  //   constructor(private firstSer: FirstService) {}

  // 2ème manière d 'injecter une dépendance
  private secondSer = inject(SecondService);
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.secondSer.bonjour();
    this.tabCandidats = this.candSer.getAllCandidates();
  }

  addNewCandidate() {
    //this.candSer.addCandidat();
  }

  afficherCandidates() {
    console.log(this.candSer.getAllCandidates());
  }
}
