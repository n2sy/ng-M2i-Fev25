import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [RouterLink, NoAvatarPipe],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  candidateToShow: Candidat;

  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: GestionCandidatsService
  ) {}

  ngOnInit() {
    //1ere méthode
    //console.log(this.activatedRoute.snapshot.params['id']);
    //this.myId = this.activatedRoute.snapshot.paramMap.get('id');

    //2ème méthode
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candidateToShow = this.candSer.getCandidatById(p.get('id'));
      },
    });
  }
}
