import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Exclude } from "class-transformer";
  import { User } from "./user.entity"

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 2000 })
  nome: string;
  
  @Column("varchar",{array:true})
  email: string[];

  @Column("varchar",{array:true})
  telefone: string[];
  
  @Column()
  criadoEm: Date;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User
}
