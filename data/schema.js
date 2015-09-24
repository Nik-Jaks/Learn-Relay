import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  nodeDefinitions,
  globalIdField,
  fromGlobalId,
} from 'graphql-relay';

import {
  ticket,
  getTicket,
  getMovie,
  getPrice
} from './database'

var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
      console.log("nI", globalId);
    var {type, id} = fromGlobalId(globalId);
    if (type === 'Ticket') {
      console.log("nodeInterface",type, id)
      return getTicket();
    }
    if (type === 'Movie') {
      console.log("nodeInterface",type, id)
      return getMovie(id);
    } else if (type === 'Price') {
      console.log("nodeInterface",type, id)
      return getPrice(id);
    } else {
      console.log("null");
      return null;
    }
  },
  (obj) => {
    if (obj instanceof Ticket) {
      console.log('nodeField' obj)
      return ticketType;
    } else if (obj instanceof Movie)  {
      console.log('nodeField' obj)
      return movieType;
    } else if (obj instanceof Price)  {
      console.log('nodeField' obj)
      return priceType;
    } else {
      console.log("null");
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
      resolve: (movie) => movie.title
    },
    rating: {
      type: GraphQLString,
      description: 'Can be one of U, PG, 12, 12A, 15, 18',
      resolve: (movie) => movie.rating
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
      resolve: (price) => price.type
    },
    amount: {
      type: GraphQLString,
      description: 'Cost of ticket',
      resolve: (price) => price.amount
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
      description: 'movie object with name, id and rating',
      resolve: (ticket) => ticket.movie
    },
    seat: {
      type: GraphQLString,
      description: 'seat number silly',
      resolve: (ticket) => ticket.seat
    },
    price: {
      type: priceType ,
      description: 'price object with type, id and amount',
      resolve: (ticket) => ticket.price
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

export var Schema = new GraphQLSchema({
  query: queryType
});
