// Importing the necessary decorators and types from TypeORM
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// Importing the User entity to establish a relationship
import { User } from '../models/User'

// Defining the ShoppingItem entity using the @Entity decorator
@Entity()
export class ShoppingItem {
  // Defining the primary key with auto-increment
  @PrimaryGeneratedColumn()
  id!: number; // The exclamation mark indicates that this field is non-nullable

  // Defining a column for the name of the shopping item
  @Column()
  name!: string; // Could be anything like "Milk", "Eggs", etc.

  // Defining a column for the quantity of the shopping item
  @Column()
  quantity!: number; // Could be any numerical value, e.g., 1, 2, 42, etc.

  // Establishing a Many-to-One relationship with the User entity
  // This means that each ShoppingItem is owned by one User, but a User can own many ShoppingItems
  @ManyToOne(() => User, (user) => user.shoppingItems)
  user!: User; // The user who owns this particular shopping item
}
