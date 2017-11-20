console.log('this is loaded');

var twitterKeys = {
  consumer_key: 'bwcDjSvIkyRwQucwG1RkOsJ9y',
  consumer_secret: 'FbCAnV5t4888EL2ndFgPkldZ6jODTYh7YEtp5hP7YpwerrMXwc',
  access_token_key: '931329134881472512-qQ2oKUoVuswXjSRWAvbnqAOPv6L18MT',
  access_token_secret: 'sNrSy7NGTHRbVd4H1WzaHnhoBVs8OZzN7GegR8VSiugTL',
}

module.exports = twitterKeys;

var T = new twitterKeys(config);

var params = { q: 'rainbow', count: 5
}
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) 
  console.log(data)
})
// }
// });