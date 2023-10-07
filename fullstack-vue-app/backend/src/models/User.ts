import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ShoppingItem } from '../entities/ShoppingItem';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  // Add this new field
  @OneToMany(() => ShoppingItem, (shoppingItem) => shoppingItem!.user)
  shoppingItems!: ShoppingItem[];
}
