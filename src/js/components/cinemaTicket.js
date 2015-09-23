'use strict';

var React = require('react');
var Relay = require('react-relay');

var { PropTypes } = React;

class CinemaTicket extends React.component {

  propTypes: {
    seat: PropTypes.string,
    movie: PropTypes.object,
    ticketType: PropTypes.object
  }

  getDefaultProps() {
    return {
      seat: 'NA',
      ticketType: {name: 'standard', price: 5}
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        <h2>{this.props.movie.rating}</h2>
        <p>{this.props.seat}</p>
        <p>{this.props.ticketType.name}</p>
        <p>{this.props.ticketType.price}</p>
      </div>
    )
  }

};

CinemaTicket = Relay.createContainer(CinemaTicket, {
  fragments: {
    movie: () => Relay.QL`
      fragment on movie {
        title,
        rating
      }
    `,
  }
});

class HelloRoute extends Relay.Route {
  static routeName = 'Cinema Ticket';
  static path = '/graphql';
  static queries = {
    movie: (Component) => Relay.QL`
      query movieQuery {
        movie {
          ${Component.getFragment('movie')},
        },
      }
    `,
  };
}

module.exports = CinemaTicket;
