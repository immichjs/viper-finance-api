import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UpdateDateColumn } from 'typeorm/decorator/columns/UpdateDateColumn';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { Account } from '../account/account.entity';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('float', { default: 0 })
  value: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('timestamp', { name: 'created_at', default: new Date() })
  createdAt: Date;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;
}
