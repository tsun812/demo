import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { Message } from "./Message";
@Entity()
@ObjectType()
export class Channel extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ default: "default channel", nullable: true })
  name: string;

  @OneToMany(() => Message, (message) => message.channel)
  messages: Message[];
}
