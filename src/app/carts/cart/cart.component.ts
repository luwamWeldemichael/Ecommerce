import {Component} from '@angular/core';
import {Product} from 'src/app/model/Product';
import {CartService} from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(index: number) {
    const item = this.cartItems[index];
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.cartItems.splice(index, 1);
    }
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.quantity * item.product.price;
    }
    else {
      this.removeFromCart(item.product.id);
    }
  }

  incrementQuantity(item: any) {
    item.quantity++;
    item.totalPrice = item.quantity * item.product.price;
  }
}
