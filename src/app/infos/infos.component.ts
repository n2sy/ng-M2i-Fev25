import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  myId;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //1ere méthode
    //console.log(this.activatedRoute.snapshot.params['id']);
    //this.myId = this.activatedRoute.snapshot.paramMap.get('id');

    //2ème méthode
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.myId = p.get('id');
      },
    });
  }
}
