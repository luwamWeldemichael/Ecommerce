import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { product: any; quantity: number; totalPrice: number }[] = [];

  getCartItems(): { product: any; quantity: number }[] {
    return this.cartItems;
  }

  addToCart(product: any) {
    // const existingCartItem = this.cartItems.find((item) => item.product === product);
    // if (existingCartItem) {
    //   existingCartItem.quantity++;
    // } else {
    //   this.cartItems.push({ product, quantity: 1, totalPrice: product.price * this.cartItems.quantity });
    // }
    const existingCartItem = this.cartItems.find((item) => item.product === product);

    if (existingCartItem) {
      existingCartItem.quantity++;
      existingCartItem.totalPrice = existingCartItem.quantity * product.price;
    } else {
      const newCartItem = {
        product,
        quantity: 1,
        totalPrice: product.price,
      };
      this.cartItems.push(newCartItem);
    }
  }

  
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  constructor() {
  }
}
