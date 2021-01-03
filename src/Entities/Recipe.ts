import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class Recipe {
  @Field(type => ID)
  _id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}
