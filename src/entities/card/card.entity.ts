import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UpdateDateColumn } from 'typeorm/decorator/columns/UpdateDateColumn';
import { User } from '../user/user.entity';

@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ length: 16 })
  number: string;

  @Column('float', { default: 0 })
  credit: number;

  @Column({ length: 2 })
  expired: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('timestamp', {
    name: 'created_at',
    default: new Date(),
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.cards)
  user: User;
}
