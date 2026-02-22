import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('links')
export class LinkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  originalUrl: string;

  @Column({ unique: true, nullable: true })
  slug: string;

  @CreateDateColumn()
  createdAt: Date;
}
