import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ShortPipe } from '../pipes/short.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-manage-servers',
  standalone: true,
  imports: [
    NgClass,
    UpperCasePipe,
    DatePipe,
    ShortPipe,
    FormsModule,
    FilterPipe,
  ],
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  selectedStatut: string = '';
  allServers = [
    {
      nom: 'Production Server',
      type: 'small',
      date_d: new Date(2020, 4, 3),
      statut: 'critical',
    },
    {
      nom: 'Development Test Server',
      type: 'medium',
      date_d: new Date(2022, 5, 6),
      statut: 'stable',
    },
    {
      nom: 'Development Server',
      type: 'large',
      date_d: new Date(),
      statut: 'offline',
    },
    {
      nom: 'Nidhal Server',
      type: 'small',
      date_d: new Date(2022, 1, 2),
      statut: 'stable',
    },
  ];
  addServer() {
    this.allServers.push({
      nom: 'NEW SERVER',
      type: 'small',
      date_d: new Date(2022, 1, 2),
      statut: 'stable',
    });
  }

  affecterClasse(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
