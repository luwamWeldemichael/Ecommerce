import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Product} from "../model/Product";
import {CartService} from '../services/cartService/cart.service';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnChanges {
  @Input() products: Product[] = [];
  filteredProducts: Product[] = [];
  @ViewChild("search") searchInput!: ElementRef<HTMLInputElement>;


  constructor(private productsService: ProductsService, private cartService: CartService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products'].currentValue) {
      this.products = changes['products'].currentValue;
      this.filteredProducts = this.products;
    }
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

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  // filteredProducts() {
  //   return this.products.filter(product => {
  //     product.name.toLowerCase().includes(this.searchText.toLowerCase());
  //   })
  // }

  inputChange(data: any) {
    // console.log((data.target as HTMLInputElement).value);
    // console.log(this.searchInput.nativeElement.value);
    this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(data.toLowerCase()));
    ;
    // console.log(data);
    // this.searchInput.nativeElement.className = "test";
  }
}
