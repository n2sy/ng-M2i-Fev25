import { Component, inject } from '@angular/core';
import { GestionProduitsService } from '../../services/gestion-produits.service';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [NgClass, CurrencyPipe],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  public productSer = inject(GestionProduitsService);
}
