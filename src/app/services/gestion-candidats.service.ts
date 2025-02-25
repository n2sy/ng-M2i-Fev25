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

  addCandidat() {
    this.candidats.push(
      new Candidat(3, 'New', 'CANDIDATE', 20, 'designer', 'lisa.png')
    );
  }
}
