import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./user.entities";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 14, unique: true })
  telephone: string;

  @CreateDateColumn()
  register_date: Date;

  @ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
  user: User;
}

export default Contact;
