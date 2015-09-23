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
		path: '/graphql/{name*}',
		handler: function(req,reply){
			var name = Object.keys(req.payload)[0];
			console.log("hello", name);
			GraphQL(Schema, name)
			.then(function(result){
				console.log('result', result);
				reply(JSON.stringify(result));
			})
		}
	}
];
