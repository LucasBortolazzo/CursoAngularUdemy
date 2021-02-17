import { menuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart.item.model";

export class ShoppingCartService {
    items: CartItem[] = [];

    clear() {
        this.items = [];
    }

    addItem(item: menuItem) {
        let foundItem = this.items.find((itemAtual) => itemAtual.menuItem.id == item.id);

        if (foundItem) {
            this.incrementQuantity(foundItem)
        } else {
            this.items.push(new CartItem(item, 1));
        }

    }

    removerItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item));
    }

    total(): number {
        return this.items.map(itemAtual => itemAtual.value()).reduce((acumulado, valoratual) => acumulado + valoratual, 0);
    }

    incrementQuantity(item: CartItem) {
        item.quantity = item.quantity + 1;
    }

    decrementQuantity(item: CartItem) {
        item.quantity = item.quantity - 1;

        if (item.quantity === 0) {
            this.removerItem(item);
        }
    }


}