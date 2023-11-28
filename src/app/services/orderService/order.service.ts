import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Order} from 'src/app/model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl: string = "http://localhost:8080/orders/"

  constructor(private httpClient: HttpClient) {
  }

  createOrder(order: Order): Observable<string> {
    return this.httpClient.post<string>(this.baseUrl + "save", order);
  }
}
