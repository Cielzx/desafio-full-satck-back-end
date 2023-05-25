import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Contact from "./contacts.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 14, unique: true })
  telephone: string;

  @Column()
  password: string;

  @CreateDateColumn()
  register_date: Date;

  @OneToMany(() => Contact, (contact) => contact.user, { cascade: true })
  contacts: Contact[];
}

export default User;
