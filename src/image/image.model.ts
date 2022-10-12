import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Table} from '@wwwouter/typed-knex';

export enum ImageType {
  CATEGORY = 'CATEGORY',
  BLOG = 'BLOG'
}

@Table('images')
export class ImageModel {
  @Column({ primary: true })
  id: string;

  @Column()
  type: ImageType

  @Column()
  typeId: string

  @Column()
  path: string;
}

@ObjectType()
export class Image implements Partial<ImageModel> {
  @Field()
  id: string;

  @Field({ nullable: true})
  blogId?: string;

  @Field({ nullable: true})
  categoryId?: string;

  @Field()
  path: string;
}