import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, ProductElement } from './product.models';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ApiClient } from '../../api_routes/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: ProductElement[] = [];
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private apiclient = inject(ApiClient);

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

  findProductById(productId: number): ProductElement | undefined {
    return this.products.find((product) => product.id === productId);
  }

  onAddToCart(productId: number) {
    const product = this.findProductById(productId);
    if (product) {
      const body = {
        product_id: productId,
        product_qty: product.qt,
      };

      this.apiclient.post<any>('add-to-cart', body).subscribe({
        next: (response) => {
          console.log('Product successfully added to cart:', response);
        },
        error: (error) => {
          console.error('Failed to add product to cart:', error);
        },
      });
    }
  }
}
