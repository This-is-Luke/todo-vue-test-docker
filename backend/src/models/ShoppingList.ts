import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class ShoppingList {
  @PrimaryGeneratedColumn()
  item_id: number;

  @Column({ type: 'varchar', length: 255 })
  item_name: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  type: string;

  @Column({
    type: 'enum',
    enum: ['Pending', 'Bought'],
    default: 'Pending',
    nullable: true
  })
  status: string;

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
