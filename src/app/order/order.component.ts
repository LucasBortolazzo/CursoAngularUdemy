import { Component, OnInit } from '@angular/core';
import { group } from '@angular/core/src/animation/dsl';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart.item.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  numberPattern = /^[0-9]*$/;

  valorFrete: number = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão Débito', value: 'DEB' },
    { label: 'Cartão Crédito', value: 'CRED' },
  ]
  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.email]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {Validator: OrderComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')

    if(!email || !emailConfirmation){
      return undefined
    }   

    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }

    return undefined
  }

  valorTotalItens(): number {
    return this.orderService.valorTotalItens();
  }

  cartItems(): CartItem[] {
    return this.orderService.RetornarCartItemsService();
  }

  incrementar(item: CartItem) {
    console.log('incrmeentar ok')
    this.orderService.icrementarQuantidadeService(item)
  }

  decrementar(item: CartItem) {
    this.orderService.decrementarQuantidadeService(item)
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))

    this.orderService.gravarOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-sumary']);
      console.log(`Compra concluída: ${orderId}`)
      this.orderService.clear();
    });
    console.log(order);
  }

}
