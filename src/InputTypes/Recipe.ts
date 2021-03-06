import { Length, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export default class RecipeInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @Length(30, 255)
  description?: string;

  @Field(type => [String])
  ingredients: string[];
}
