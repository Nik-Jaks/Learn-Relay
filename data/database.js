'use strict';

export class Ticket extends Object {}

var data = {
  Movie: {
    20151: 'Le Diner De Cons',
    2: empire
  },
  Ship: {
    1: xwing,
    2: ywing,
    3: awing,
    4: falcon,
    5: homeOne,
    6: tieFighter,
    7: tieInterceptor,
    8: executor
  }
};

var ticket = new Ticket();

ticket.id = '1';
ticket.movie = '20151';
ticket.seat = 'A1';
ticket.price = '1';

export function getTicket() { return ticket; }
