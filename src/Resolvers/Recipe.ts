import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import RecipeEntity from '@Entities/Recipe';
import RecipeInput from '@InputTypes/Recipe';
import RecipeSchema from '@Schema/Recipe';

type User = {
  name: string;
  age: number;
};

@Resolver()
export default class RecipeResolver {
  @Query(returns => RecipeEntity)
  async recipe(@Arg('id') id: string, @Ctx('name') name: string) {
    const recipe = await RecipeSchema.findById(id);
    return recipe;
  }

  @Query(returns => [RecipeEntity])
  async recipes(@Ctx('user') user: User) {
    console.log('user', user);
    const recipes = await RecipeSchema.find();
    return recipes;
  }

  @Mutation(returns => RecipeEntity)
  async insertOneRecipe(@Arg('recipeInput') recipeInput: RecipeInput) {
    const newRecipe = new RecipeSchema({
      ...recipeInput,
      creationDate: new Date(),
    });
    await newRecipe.save();
    return newRecipe;
  }

  @Mutation(returns => Boolean)
  async deleteOneRecipe(@Arg('recipeId') recipeId: String) {
    const recipeDeleted = await RecipeSchema.deleteOne({ _id: recipeId });
    return recipeDeleted.deletedCount === 1 ? true : false;
  }
}
