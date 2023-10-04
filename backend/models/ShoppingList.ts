export default class ShoppingList {
    constructor(
      public id: number,
      public userId: number,
      public itemName: string,
      public quantity: number,
      public isPurchased: boolean
    ) {}
  }
  