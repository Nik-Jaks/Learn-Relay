'use strict';

var React = require('react');
var Relay = require('react-relay');

export default class extends Relay.Route {
  static routeName = 'AppHomeRoute';
  static path = '/graphql';
  static queries = {
    ticket () => Relay.QL`
      query {
        ticket
      }
    `,
  };
}
