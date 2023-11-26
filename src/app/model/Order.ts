import { OrderItem } from "./OrderItem";
import {Product} from "./Product";

export interface Order {
  orderItems: OrderItem[];
}
