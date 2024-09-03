import { Component, inject, OnInit } from '@angular/core';
import { Cart, CartElement, ProductElement } from '../product/product.models';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: CartElement[] = [];
  private cartService = inject(CartService);

  ngOnInit() {
    this.cartService.getCart().subscribe({
      next: (cartItems: Cart) => {
        this.cartItems = cartItems.cart;

        console.log(this.cartItems);
      },
    });
  }
}
