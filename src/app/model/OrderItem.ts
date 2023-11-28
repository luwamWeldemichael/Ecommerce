import {Product} from "./Product";

export interface OrderItem {
  productId : number;
  quantity : number;
  subtotal : number;
}
