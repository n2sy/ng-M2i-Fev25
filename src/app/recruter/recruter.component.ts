import { Component } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { Candidat } from '../models/candidat';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-recruter',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './recruter.component.html',
  styleUrl: './recruter.component.css',
})
export class RecruterComponent {
  tabRecrues: Candidat[] = [];
  constructor(private recrueSer: GestionRecruesService) {}

  ngOnInit() {
    this.tabRecrues = this.recrueSer.getAllRecrues();
  }
}
