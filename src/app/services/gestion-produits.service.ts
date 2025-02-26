import { effect, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class GestionProduitsService {
  allProducts = signal<Product[]>([]);

  constructor() {
    this.allProducts.set([
      new Product(1, 'product 1', 300, true),
      new Product(2, 'product 2', 100, false),
      new Product(3, 'product 3', 150, true),
    ]);

    effect(() => {
      console.log('Nouvelle liste de produits : ', this.allProducts());
    });
  }

  addProduct(newProduit) {
    newProduit.id = crypto.randomUUID();
    this.allProducts.update((previous) => [...previous, newProduit]);
  }

  deleteProduct(idProduct: number) {
    this.allProducts.update((previous) =>
      previous.filter((p) => p.id != idProduct)
    );
  }

  toggleSelected(id) {
    this.allProducts.update((previous) =>
      previous.map((p) => (p.id == id ? { ...p, selected: !p.selected } : p))
    );
  }
}
