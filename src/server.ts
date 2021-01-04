import 'reflect-metadata';
import '@config/connect';
import RecipeResolver from '@Resolvers/Recipe';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [RecipeResolver],
  });
  const apollo = new ApolloServer({
    schema,
    context: () => {
      return { user: { name: 'Fábio', age: 27 } };
    },
  });

  apollo.listen({ port: 7000 }, () =>
    console.log(`Apollo server listening on port 7000`),
  );
};

bootstrap();
