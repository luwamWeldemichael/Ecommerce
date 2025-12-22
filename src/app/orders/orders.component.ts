import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../model/Order';
import {Product} from '../model/Product';
import {OrderService} from '../services/orderService/order.service';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  product: Product | undefined;

  constructor(private orderService: OrderService, private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => this.orders = data);
    
  }

  // getOrderItemProduct(id: number): Product {
  //   // let product: Product = undefined;
  //   this.productsService.getProduct(id).subscribe(data => product = data);
  //   return product;
  // }
}
