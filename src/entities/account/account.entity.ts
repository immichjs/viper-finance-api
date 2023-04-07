import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UpdateDateColumn } from 'typeorm/decorator/columns/UpdateDateColumn';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { Transaction } from '../transaction/transaction.entity';
import { User } from '../user/user.entity';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('float', { default: 0 })
  balance: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('timestamp', { name: 'created_at', default: new Date() })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.account, {
    nullable: true,
  })
  transactions: Transaction[];
}
