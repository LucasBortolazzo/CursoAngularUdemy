import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart.item.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html',
  styleUrls: ['./order-itens.component.css']
})
export class OrderItensComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() AumentarQuantidade = new EventEmitter<CartItem>()
  @Output() DiminuirQuantidade = new EventEmitter<CartItem>()
  @Output() RemoveItem = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitAumentarQuantidade(item: CartItem) {
    console.log('aumentando quantidade')
    this.AumentarQuantidade.emit(item);
  }

  emitDiminuirQuantidade(item: CartItem) {
    this.DiminuirQuantidade.emit(item);
  }

  emitRemoveItem(item: CartItem) {
    this.RemoveItem.emit(item);
  }

}
