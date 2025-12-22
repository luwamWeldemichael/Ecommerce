import { OrderItem } from "./OrderItem";
import {Product} from "./Product";

export interface Order {
  // id: number;
  orderItems: OrderItem[];
}
