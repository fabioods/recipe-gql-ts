import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import RecipeEntity from '@Entities/Recipe';
import RecipeInput from '@InputTypes/Recipe';
import RecipeSchema from '@Schema/Recipe';

@Resolver()
export default class RecipeResolver {
  @Query(returns => RecipeEntity)
  async recipe(@Arg('id') id: string) {
    const recipe = await RecipeSchema.findById(id);
    return recipe;
  }

  @Query(returns => [RecipeEntity])
  async recipes() {
    const recipes = await RecipeSchema.find();
    return recipes;
  }

  // @Mutation(returns => Recipe)
  // async insertOneRecipe(recipe: RecipeInput) {}
}
