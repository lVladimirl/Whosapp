import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Exclude } from "class-transformer"
import { Contact} from "./contact.entity"
@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  criadoEm: Date;

  @Column({ length: 2000 })
  nome: string;

  @Column({ length: 2000, unique: true })
  email: string;

  @Column({ length: 200 })
  @Exclude({ toPlainOnly: true })
  senha: string;

  @OneToMany(() => Contact, (contact) => contact.user, { eager: true })
  @JoinTable()
  contacts: Contact[];
}
