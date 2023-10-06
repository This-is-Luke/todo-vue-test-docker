import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class ShoppingList {
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

  constructor(
    id?: number,
    userId?: number,
    itemName?: string,
    quantity?: number,
    isPurchased?: boolean
  ) {
    this.id = id || 0;
    this.userId = userId || 0;
    this.itemName = itemName || '';
    this.quantity = quantity || 0;
    this.isPurchased = isPurchased || false;
  }
}
