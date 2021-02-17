import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-total-pedido',
  templateUrl: './total-pedido.component.html',
  styleUrls: ['./total-pedido.component.css']
})
export class TotalPedidoComponent implements OnInit {

  @Input() totalFrete: number;
  @Input() totalItens: number;

  constructor() { }

  ngOnInit() {
  }

  totalPedido(): number {
    return this.totalFrete + this.totalItens;
  }
}
