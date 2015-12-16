var axios = require('axios');

function getRepos(username){
	return axios.get('https://api.github/users' + username + '/repos');
};

function getUserInfo(username){
	return axios.get('https://api.github/users' + username);
};

var helpers = {
	getGithubInfo: function(){
		return axios.all([getRepos(username), getUserInfo(username)])
		.then(function(arr){
			return {
				repos: arr[0].data,
				bio: arr[1].data
			}
		});
	}
};

module.exports = helpers;
