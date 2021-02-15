import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart-service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {

  }

  items(): any[] {
    return this.service.items;
  }

  clear() {
    this.service.clear();
  }

  removeItem(item: any) {
    this.service.removerItem(item);
  }

  addItem(item: any) {
    this.service.addItem(item);
  }

  total(): number {
    return this.service.total();
  }

}
