import RecipeSchema from '@Schema/Recipe';

type RecipeResponse = {
  title: string;

  description: string;

  creationDate: Date;

  ingredients: String[];
};

export default class RecipeService {
  async findById(id: string): Promise<RecipeResponse> {
    const recipe = ((await RecipeSchema.findById(
      id,
    )) as unknown) as RecipeResponse;
    return recipe;
  }

  async findAll(): Promise<RecipeResponse[]> {
    const recipes = ((await RecipeSchema.find()) as unknown) as RecipeResponse[];
    return recipes;
  }
}
