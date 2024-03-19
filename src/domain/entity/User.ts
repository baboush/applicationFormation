import { join } from 'path/posix';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from './Profile';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column({ default: 'user' })
  role!: string;

  @OneToOne(() => Profile, (profile: Profile) => profile.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  profile!: Profile;

  @CreateDateColumn()
  createdAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}
