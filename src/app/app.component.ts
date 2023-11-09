import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CartService} from './services/cartService/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'E-Commerce';
  cartItemsCount: number = 0;
  subcriptions: Subscription[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnDestroy(): void {
    this.subcriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.subcriptions.push(
      this.cartService.cartCountSubject.subscribe(count => {
        this.cartItemsCount = count
      })
    );
  }
}
