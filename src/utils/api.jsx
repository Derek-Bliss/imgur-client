var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '14ad403d4b505ea';

module.exports = {
	get: function(url){
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID: ' + apiKey
			}
		})
		.then(function(response){
			return response.json()
		})
	}
}