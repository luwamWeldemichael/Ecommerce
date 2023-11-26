import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {Order} from 'src/app/model/Order';
import { OrderItem } from 'src/app/model/OrderItem';
import {Product} from 'src/app/model/Product';
import {CartService} from 'src/app/services/cartService/cart.service';
import {OrderService} from 'src/app/services/orderService/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  headers = ["Product", "Description", "Quantity", "Price", "Remove"]
  cartItems: any[] = [];

  constructor(public cartService: CartService, private orderService: OrderService, private router: Router) {
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
    let totalPrice = 0;
    this.cartItems.forEach(item => {
      totalPrice += item.totalPrice;
    })
    return totalPrice;
  }

  checkout() {
    const orderItems : OrderItem[] = [];
    this.cartItems.forEach(item => {
      orderItems.push({
        productId: item.product.id,
        quantity: item.quantity,
        subtotal: item.totalPrice
      })
    });
    const order: Order = {orderItems : orderItems};
    this.orderService.createOrder(order).subscribe(data => {
      this.cartItems = [];
      console.log(data);
      this.router.navigateByUrl("/orders")
    });
  }
}
