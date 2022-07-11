import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "default channel", nullable: true })
  name: string;
}
