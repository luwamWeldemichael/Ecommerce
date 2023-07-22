import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { AddProductComponent } from './product/add-product/add-product.component';
import {ProductsComponent} from "./products/products/products.component";

const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'addProduct', component: AddProductComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
