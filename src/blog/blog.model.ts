import { Field, ObjectType } from "@nestjs/graphql";
import { Table, Column } from "@wwwouter/typed-knex";
import { UserModel } from "src/users/user.model";

@Table('blogs')
export class BlogModel {
  @Column()
  id: string;

  @Column()
  title: string;

  @Column()
  excerpt?: string;

  @Column()
  content: string;

  @Column()
  authorId: string;

  @Column()
  categoryId?: string;

  @Column()
  publishedAt?: Date;

  author?: UserModel
}

@ObjectType()
export class Blog implements Partial<BlogModel> {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true})
  excerpt?: string;

  @Field()
  content: string;

  @Field()
  authorId: string;

  @Field({ nullable: true })
  categoryId?: string;

  @Field({ nullable: true})
  publishedAt?: Date;
}