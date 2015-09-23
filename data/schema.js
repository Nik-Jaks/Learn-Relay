import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

var MOVIE = {
  title: 'Le Diner de Cons',
  rating: '12'
}

var MovieType = new GraphQLObjectType({
  name: 'movie',
  fields: () => ({
    title: {type: GraphQLString},
    rating: {type: GraphQLString}
  }),
});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      movie: {
        type: MovieType,
        resolve: () => MOVIE
      },
    }),
  }),
});
