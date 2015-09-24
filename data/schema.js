import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  nodeDefinitions,
  globalIdField
} from 'graphql-relay';

import {
  ticket,
  getTicket,
  getMovie,
  getPrice
} from './database'

var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'Movie') {
      return getMovie(id);
    } else if (type === 'Price') {
      return getPrice(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof Ticket) {
      return ticketType;
    } else if (obj instanceof Movie)  {
      return movieType;
    } else if (obj instanceof Price)  {
      return priceType;
    } else {
      return null;
    }
  }
);

var movieType = new GraphQLObjectType({
  name: 'Movie',
  description: 'A movie at our wonderful one screen Cinema',
  fields: () => ({
    id: globalIdField('Movie'),
    title: {
      type: GraphQLString,
      description: 'The title of the movie',
    },
    rating: {
      type: GraphQLString,
      description: 'Can be one of U, PG, 12, 12A, 15, 18',
    },
  }),
  interfaces: [nodeInterface]
});

var priceType = new GraphQLObjectType({
  name: 'Price',
  description: 'Pricing info for the ticket',
  fields: () => ({
    id: globalIdField('Price'),
    type: {
      type: GraphQLString,
      description: 'type of ticket, standard, 3D, student, OAP',
    },
    rating: {
      type: GraphQLString,
      description: 'Can be one of U, PG, 12, 12A, 15, 18',
    },
  }),
  interfaces: [nodeInterface]
});

var ticketType = new GraphQLObjectType({
  name: 'Ticket',
  description: 'Your cinema ticket!!!',
  fields: () => ({
    id: globalIdField('Ticket'),
    movie: {
      type: movieType ,
      description: 'movie object with name, id and rating'
      resolve: (ticket) => getMovie(ticket.movie)
    },
    seat: {
      type: GraphQLString,
      description: 'seat number silly'
      resolve: (ticket) => ticket.seat
    },
    price: {
      type: priceType ,
      description: 'price object with type, id and amount'
      resolve: (ticket) => getPrice(ticket.price)
    },
  }),
  interfaces: [nodeInterface]
});

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ticket: {
      type: ticketType,
      resolve: () => getTicket()
    },
    node: nodeField
  }),
});

export default new GraphQLSchema({
  query: queryType
});
