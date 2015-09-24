require('babel/polyfill');

export default class extends Relay.Route {
  static path = '/';
  static queries = {
    ticket: () => Relay.QL`query { ticket }`,
  };
  static routeName = 'AppHomeRoute';
}
