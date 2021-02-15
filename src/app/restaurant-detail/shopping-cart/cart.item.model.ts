import { menuItem } from "../menu-item/menu-item.model";

export class CartItem {
    constructor(public menuItem: menuItem,
        public quantity: number = 1) { }

    value(): number {
        return this.menuItem.price * this.quantity;
    }

}