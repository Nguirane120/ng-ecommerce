import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, ProductElement } from './product.models';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: ProductElement[] = [];
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe((response: Product) => {
      this.products = response.products;
      console.log(this.products);
    });
  }

  getImageUrl(relativePath: string): string {
    const encodedPath = this.encodePath(relativePath);
    return `${this.productService.API_URL}/${encodedPath}`;
  }

  private encodePath(path: string): string {
    return path.replace(/\s+/g, '%20');
  }
}
