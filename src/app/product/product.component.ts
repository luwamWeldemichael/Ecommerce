import {Component, Input} from '@angular/core';
import {Product} from "../model/Product";
import { CartService } from '../services/cartService/cart.service';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() products: Product[] = [];


  constructor(private productsService: ProductsService, private cartService : CartService) {
  }

  isAddToCartDisabled(description: any): boolean {
    return description === undefined;
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe((data) => {
        console.log('Success');
      },
      (error) => {
        this.products = this.products.filter(product => product.id !== id);
        console.log('error', this.products);
      });

  }

  addToCart(product : Product) {
    this.cartService.addToCart(product);
  }
}
