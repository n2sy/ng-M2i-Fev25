import { Component, computed, inject } from '@angular/core';
import { GestionProduitsService } from '../../services/gestion-produits.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  productSer = inject(GestionProduitsService);

  nbSelected = computed(() => {
    return this.productSer.allProducts().filter((p) => p.selected).length;
  });

  total = computed(() => {
    let produitsSelectionnes = this.productSer
      .allProducts()
      .filter((p) => p.selected);
    return produitsSelectionnes.reduce((acc, p) => acc + p.price, 0);
  });
}
