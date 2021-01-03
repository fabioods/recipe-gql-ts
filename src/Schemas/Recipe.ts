import { Schema, model } from 'mongoose';

const RecipeSchema = new Schema({
  title: { type: String },

  description: { type: String },

  ingredients: { type: Array<String>() },
});

export default model('Recipe', RecipeSchema);
