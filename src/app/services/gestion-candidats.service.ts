import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private candidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 25, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 53, 'directeur', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 20, 'designer', 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 20, 'dev'),
  ];

  constructor() {}

  getAllCandidates() {
    return this.candidats;
  }

  addCandidat(newCandidat) {
    newCandidat._id = this.candidats[this.candidats.length - 1]._id + 1;
    this.candidats.push(newCandidat);
  }

  getCandidatById(id) {
    return this.candidats.find((element) => element._id == id);
  }

  updateCandidat(cand) {
    let i = this.candidats.findIndex((element) => element._id == cand._id);
    this.candidats[i] = cand;
  }
}
