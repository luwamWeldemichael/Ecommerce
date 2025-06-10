import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Product} from 'src/app/model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItems: { product: Product; quantity: number; totalPrice: number }[] = [];
  public cartCount: number = 0;
  cartCountSubject: Subject<number> = new Subject<number>();

  getCartItems(): { product: any; quantity: number }[] {
    return this._cartItems;
  }

  clearCartItems() {
    this._cartItems = [];
  }

  addToCart(product: any) {
    this.cartCount++;
    this.cartCountSubject.next(this.cartCount);
    const existingCartItem = this._cartItems.find((item) => item.product === product);

    if (existingCartItem) {
      existingCartItem.quantity++;
      existingCartItem.totalPrice = existingCartItem.quantity * product.price;
    } else {
      const newCartItem = {
        product,
        quantity: 1,
        totalPrice: product.price,
      };
      this._cartItems.push(newCartItem);
    }
  }

  removeFromCart(item: any, index: number) {
    const itemCount = item.quantity;
    this._cartItems.splice(index, 1);
    this.cartCount = this.cartCount - itemCount;
    this.cartCountSubject.next(this.cartCount);
  }

  decrementQuantity(item: any, index: number) {
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.quantity * item.product.price;
      this.cartCount--;
      this.cartCountSubject.next(this.cartCount)
    } else {
      this.removeFromCart(item, index);
    }
  }

  incrementQuantity(item: any) {
    if (item.product.quantity > item.quantity) {
      this.cartCount++;
      this.cartCountSubject.next(this.cartCount)
      item.quantity++;
      item.totalPrice = item.quantity * item.product.price;
    }
  }


}
