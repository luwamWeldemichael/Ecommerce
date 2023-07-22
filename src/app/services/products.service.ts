import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = "http://localhost:8080/products";
  private triggerProductSavedLog  : Subject<string> = new Subject();
  
  // products: Product[] = [
  //   {id: '1', name: 'Laptop', price: 111.3},
  //   {id: '2', name: 'Tablet', price: 90, description: 'It is tab generation 1'},
  //   {id: '3', name: 'Iphone', price: 100}
  // ];

  constructor(private http: HttpClient) {
  }

  getTriggerProductSavedLog() : Subject<string>{
    return this.triggerProductSavedLog;
  }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }
  getProduct(id: number) : Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/`+ id );
  }
  saveProduct(product : Product) : Observable<Product>{
    this.triggerProductSavedLog.next("Product saved");
    return this.http.post<Product>(this.baseUrl, product);
  }
  deleteProduct(id : number) : Observable<string>{
    return this.http.delete<string>(`${this.baseUrl}/`+ id);
  }
}
