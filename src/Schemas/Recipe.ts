import mongoose from 'mongoose';

const Recipe = new mongoose.Schema({
  title: { type: String },

  description: { type: String },

  creationDate: { type: Date },

  ingredients: { type: Array<String>() },
});

export default mongoose.model('Recipe', Recipe);
