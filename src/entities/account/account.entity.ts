import { Column, Entity } from 'typeorm';

@Entity('accounts')
export class Account {
  @Column()
  bankName: string;

  @Column()
  balance: number;

  @Column('date', { name: 'created_at', default: new Date() })
  createdAt: Date;
}
