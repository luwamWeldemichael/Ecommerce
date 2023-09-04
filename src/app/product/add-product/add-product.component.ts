import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  // @ts-ignore
  productForm: FormGroup;


  constructor(private productsService : ProductsService, private router : Router) {
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  saveProduct() {
    this.productsService.saveProduct(this.productForm.value).subscribe(data=>{
      console.log('saved data to db', data);
    });
    const id = this.productForm.value.id;
    // console.log('id', id)
    this.router.navigateByUrl("products", {state:{productId: id}});
  }
}
