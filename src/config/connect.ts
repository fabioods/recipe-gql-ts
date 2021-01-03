import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/gql-ts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
