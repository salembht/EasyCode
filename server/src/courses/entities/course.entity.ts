import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { Stage } from 'src/stages/entities/stage.entity';
import { Like } from 'src/likes/entities/like.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imagePath: string;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column()
  createdDate: Date;

  @Column()
  modificationDate: Date;

  @Column({ default: false })
  isPublished: boolean;

  // realtions issues

  @ManyToOne(() => Category, category => category.courses)
  category: Category;

  @OneToMany(() => Stage, stage => stage.course)
  stages: Stage[];

  @OneToMany(() => Like, (like) => like.course)
  likes: Like[];
}