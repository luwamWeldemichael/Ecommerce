import {Component} from '@angular/core';
import {Product} from 'src/app/model/Product';
import {CartService} from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  headers = ["Product", "Description", "Quantity", "Price", "Remove"]
  cartItems: any[] = [];

  constructor(public cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: any, index: number) {
    this.cartService.removeFromCart(item, index);
  }

  decrementQuantity(item: any, index: number) {
    this.cartService.decrementQuantity(item, index);
  }

  incrementQuantity(item: any) {
    this.cartService.incrementQuantity(item);
  }

  calculateTotal(): number {
    let totalPrice =0;
    this.cartItems.forEach(item => {
      totalPrice+= item.totalPrice;
    })
    return totalPrice;
  }
}
