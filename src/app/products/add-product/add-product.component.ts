import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionProduitsService } from '../../services/gestion-produits.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  public productSer = inject(GestionProduitsService);
}
