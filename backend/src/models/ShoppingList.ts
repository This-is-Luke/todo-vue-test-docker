import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  itemName: string;

  @Column()
  quantity: number;

  @Column()
  isPurchased: boolean;

  constructor(id: number, userId: number, itemName: string, quantity: number, isPurchased: boolean) {
    this.id = id;
    this.userId = userId;
    this.itemName = itemName;
    this.quantity = quantity;
    this.isPurchased = isPurchased;
  }
}
