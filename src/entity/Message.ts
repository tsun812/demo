import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Channel } from "./Channel";
@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => Channel)
  channel: Channel;

  @Column()
  createdAt: Date;
}
