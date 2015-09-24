'use strict';
var React = require('react');
var CinemaTicket = React.createClass({

  render() {
    console.log("props", this.props)
    return (
      <div>
         <h1>{this.props.ticket.movie.title}</h1>
         <h2>{this.props.ticket.movie.rating}</h2>
         <p>{this.props.ticket.seat}</p>
      </div>
    )
  }

});

export default Relay.createContainer(CinemaTicket, {
  fragments: {
    ticket: () => Relay.QL`
    fragment on Ticket {
        movie {
          title,
          rating
        },
        seat,
        price {
          type,
          amount
        }
      }
    `,
  }
});
