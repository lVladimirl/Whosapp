import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Exclude } from "class-transformer";
  import { User } from "./user.entity"

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 2000 })
  nome: string;
  
  @Column({ length: 2000, unique: true })
  email: string;

  @Column({ length: 200 })
  @Exclude({ toPlainOnly: true })
  senha: string;
  
  @Column()
  criadoEm: Date;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User
}
