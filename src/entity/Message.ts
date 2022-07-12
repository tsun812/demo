import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { Channel } from "./Channel";
@Entity()
@ObjectType()
export class Message extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  title: string;

  @Field()
  @Column()
  content: string;

  @ManyToOne(() => Channel, (channel) => channel.messages)
  channel: Channel;

  @Field({ nullable: true })
  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @Column({ type: "int", nullable: true })
  channelId?: number | null;
}
