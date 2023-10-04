import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  isCompleted: boolean;

  constructor(id?: number, userId?: number, title?: string, description?: string, isCompleted?: boolean) {
    this.id = id || 0;
    this.userId = userId || 0;
    this.title = title || '';
    this.description = description || '';
    this.isCompleted = isCompleted || false;
  }
}
