import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { CartComponent } from './carts/cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import {AddProductComponent} from './product/add-product/add-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {ProductsComponent} from "./products/products/products.component";

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'edit', component: EditProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'orders', component: OrdersComponent}
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
export class AppRoutingModule {
}
