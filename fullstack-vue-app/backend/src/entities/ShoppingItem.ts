import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../models/User' // Importing the User entity

// Define the ShoppingItem entity
@Entity()
export class ShoppingItem {
  @PrimaryGeneratedColumn()
  id!: number; // Unique identifier for each shopping item

  @Column()
  name!: string; // Name of the shopping item, e.g., "Milk"

  @Column()
  quantity!: number; // Quantity of the shopping item, e.g., 1

  // Linking each ShoppingItem to a User
  @ManyToOne(() => User, (user) => user.shoppingItems)
  user!: User; // The user who owns this shopping item
}
