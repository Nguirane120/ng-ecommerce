import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Cart, ProductElement } from '../product/product.models';
import { ApiClient } from '../../api_routes/api';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private cartItemsSubject = new BehaviorSubject<ProductElement[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private apiclient = inject(ApiClient);

  addToCart(product: ProductElement) {
    // const currentItems = this.cartItemsSubject.value;
    // this.cartItemsSubject.next([...currentItems, product]);
    // return this.apiclient.post<ProductElement>('add-to-cart', product).pipe(
    //   map(() => {
    //     console.log('item added to cart');
    //   })
    // );
    return this.apiclient.post<ProductElement>('add-to-cart', product);
  }

  getCart(): Observable<Cart> {
    return this.apiclient.get<Cart>('carts');
  }

  getCartItems() {
    return this.cartItemsSubject.value;
  }
}
