import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  link: string = 'http://localhost:3000/cv/candidats';
  private candidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 25, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 53, 'directeur', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 20, 'designer', 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 20, 'dev'),
  ];

  constructor(private http: HttpClient) {}

  getAllCandidates() {
    return this.candidats;
  }

  getAllCandidatesAPI() {
    return this.http.get(this.link);
  }

  addCandidat(newCandidat) {
    newCandidat._id = this.candidats[this.candidats.length - 1]._id + 1;
    this.candidats.push(newCandidat);
  }

  addCandidatAPI(newCandidat) {
    return this.http.post(`${this.link}`, newCandidat);
  }

  uploadAvatar(f: FormData) {
    return this.http.post('http://localhost:3000/images/upload', f);
  }

  getCandidatById(id) {
    return this.candidats.find((element) => element._id == id);
  }

  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  updateCandidat(cand) {
    let i = this.candidats.findIndex((element) => element._id == cand._id);
    this.candidats[i] = cand;
  }

  updateCandidatAPI(cand) {
    return this.http.put(`${this.link}/${cand._id}`, cand);
  }

  deleteCandidat(idCand) {
    let i = this.candidats.findIndex((element) => element._id == idCand);
    this.candidats.splice(i, 1);
  }
  deleteCandidatAPI(idCand) {
    console.log(idCand);

    return this.http.delete(`${this.link}/${idCand}`);
  }
}
