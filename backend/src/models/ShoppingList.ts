import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class ShoppingList {
  @PrimaryGeneratedColumn()
  item_id: number;

  @Column()
  item_name: string;

  @Column()
  quantity: number;

  @Column()
  type: string;

  @Column()
  status: string="Bought" || "Pending";

  constructor(
    id?: number,
    item_name?: string,
    quantity?: number,
    type?: string,
    status?: string
  ) {
    this.item_id = id || 0;
    this.item_name = item_name || '';
    this.quantity = quantity || 0;
    this.type = type || '';
    this.status = status || 'Pending';
  }
}
