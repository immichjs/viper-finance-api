import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500, unique: true })
  email: string;

  @Column({ length: 32 })
  password: string;

  @Column('date', { name: 'created_at', default: new Date() })
  createdAt: Date;
}
