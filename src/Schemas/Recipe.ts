import { Schema, model } from 'mongoose';

const RecipeSchema = new Schema({
  title: { type: String },

  description: { type: String },

  ingredients: { type: Array<String>() },

  creationDate: { type: Date, default: () => new Date() },
});

export default model('Recipe', RecipeSchema);
