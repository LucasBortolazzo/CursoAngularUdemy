import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart.item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart-service";
import { Observable } from "rxjs/Observable";
import { Order } from "./order.model";
import 'rxjs/add/operator/map'
import { MEAT_API } from "app/api.api";


@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService,
        private http: Http) { }

    RetornarCartItemsService(): CartItem[] {
        return this.cartService.items;
    }

    icrementarQuantidadeService(item: CartItem) {
        this.cartService.incrementQuantity(item)
    }

    decrementarQuantidadeService(item: CartItem) {
        this.cartService.decrementQuantity(item)
    }

    remove(item: CartItem) {
        this.cartService.removerItem(item);
    }

    valorTotalItens(): number {
        return this.cartService.total();
    }

    gravarOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`,
            JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(order => order.id)
    }

    clear() {
        this.cartService.clear();
    }
}