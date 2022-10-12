import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Table } from "@wwwouter/typed-knex";

@Table('categories')
export class CategoryModel {

  @Column({ primary: true })
  public id: string

  @Column()
  public name: string
}

@ObjectType()
export class Category implements CategoryModel {

  @Field()
  id: string;

  @Field()
  name: string;
}