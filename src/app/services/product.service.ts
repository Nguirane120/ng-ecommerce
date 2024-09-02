import { inject, Injectable } from '@angular/core';
import { ApiClient } from '../../api_routes/api';
import { Product } from '../product/product.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = 'http://127.0.0.1:8000'; // URL de base de l'API

  constructor(private apiClient: ApiClient) {}

  getProducts(): Observable<Product> {
    return this.apiClient.get<Product>('all-product');
  }

  encodePath(path: string): string {
    return encodeURI(path);
  }

  getImageUrl(relativePath: string): string {
    const encodedPath = this.encodePath(relativePath);
    return `${this.API_URL}/${encodedPath}`;
  }
}
