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

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  telephone: string;

  @Column()
  password: string;

  @CreateDateColumn()
  register_date: Date;

  @OneToMany(() => Contact, (contact) => contact.user, { cascade: true })
  contacts: Contact[];
}

export default User;
