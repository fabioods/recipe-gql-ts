import { Arg, Query, Resolver } from 'type-graphql';
import RecipeEntity from '@Entities/Recipe';
import RecipeService from '@Services/Recipe';

@Resolver(RecipeEntity)
export default class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query(returns => RecipeEntity)
  async recipe(@Arg('id') id: string) {
    const recipe = await this.recipeService.findById(id);
    return recipe;
  }

  @Query(returns => [RecipeEntity])
  async recipes() {
    const recipes = await this.recipeService.findAll();
    return recipes;
  }
}
