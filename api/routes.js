'use strict';

require('babel/register');
var GraphQL = require('graphql').graphql;
var Schema = require('../data/schema.js');

module.exports = [
	{
		method: 'GET',
		path: '/{filepath*}',
		handler: {
			directory: {
				path: 'public'
			}
		}
	},
	{
		method: 'POST',
		path: '/graphql',
		handler: function(req,reply){
			var query = req.payload.query;
			GraphQL(Schema, query)
			.then(function(result){
				reply(JSON.stringify(result));
			})
		}
	}
];
