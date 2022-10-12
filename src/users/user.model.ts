import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Column, Table } from '@wwwouter/typed-knex';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

@Table('users')
export class UserModel {
  @Column()
  id: string;

  @Column()
  name: string;

  @Column()
  role?: UserRole;
}

registerEnumType(UserRole, { name: 'UserRole'})

@ObjectType()
export class User implements Partial<UserModel> {
  @Field()
  id: string;

  @Field()
  name: string

  @Field(() => UserRole)
  role?: UserRole
}