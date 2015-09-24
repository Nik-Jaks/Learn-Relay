'use strict';

var React = require('react');
var Relay = require('react-relay');

class CinemaTicket extends React.component {

  render() {
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        <h2>{this.props.movie.rating}</h2>
        <p>{this.props.seat}</p>
        <p>{this.props.price.amount}</p>
        <p>{this.props.price.type}</p>
      </div>
    )
  }

};

CinemaTicket = Relay.createContainer(CinemaTicket, {
  fragments: {
    ticket: () => Relay.QL`
      fragment on Ticket {
        movie {
          title,
          rating
        },
        seat,
        ticketType {
          type,
          amount
        }
      }
    `,
  }
});

module.exports = CinemaTicket;
