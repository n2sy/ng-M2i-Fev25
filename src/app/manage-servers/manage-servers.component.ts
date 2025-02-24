import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  standalone: true,
  imports: [],
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
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
}
