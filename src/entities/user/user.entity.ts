import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UpdateDateColumn } from 'typeorm/decorator/columns/UpdateDateColumn';
import { Account } from '../account/account.entity';
import { Card } from '../card/card.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column({
    length: 500,
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('timestamp', { name: 'created_at', default: new Date() })
  createdAt: Date;

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @OneToMany(() => Card, (card) => card.user)
  cards: Card[];
}
