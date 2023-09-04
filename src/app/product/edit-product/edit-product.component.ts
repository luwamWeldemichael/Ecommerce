import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  // @ts-ignore
  productForm: FormGroup;

  constructor(private route: ActivatedRoute, private router : Router, private productsService : ProductsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.productForm = new FormGroup({
        id: new FormControl(data['id'], [Validators.required]),
        name: new FormControl(data['name'], [Validators.required]),
        price: new FormControl(data['price'], [Validators.required]),
        description: new FormControl(data['description'], [Validators.required]),
      });
    })
  }

  edit() {
    this.productsService.updateProduct(this.productForm.value).subscribe(data => {
      console.log(data);
    })
    this.router.navigateByUrl("products");
  }
}
