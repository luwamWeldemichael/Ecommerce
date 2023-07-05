import {Component, Input} from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() products: Product[] = [];

  isAddToCartDisabled(description: any): boolean {
    return description === undefined;
  }
}
