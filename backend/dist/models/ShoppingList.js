"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingList {
    constructor(id, userId, itemName, quantity, isPurchased) {
        this.id = id;
        this.userId = userId;
        this.itemName = itemName;
        this.quantity = quantity;
        this.isPurchased = isPurchased;
    }
}
exports.default = ShoppingList;
