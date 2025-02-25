import { Component, inject } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { FirstComponent } from '../first/first.component';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
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
  private firstSer = inject(FirstService);
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.firstSer.afficherInfos();
    this.tabCandidats = this.candSer.getAllCandidates();
  }

  addNewCandidate() {
    this.candSer.addCandidat();
  }

  afficherCandidates() {
    console.log(this.candSer.getAllCandidates());
  }
}
