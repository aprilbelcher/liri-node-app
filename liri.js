// console.log("this is working");
var inquirer = require('inquirer');
var twitKey = require("./keys.js");
// console.log(twitKey);

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: twitKey.consumer_key,
    consumer_secret: twitKey.consumer_secret,
    access_token_key: twitKey.access_token_key,
    access_token_secret: twitKey.access_token_secret
  });

inquirer.prompt([
    {
    type: "list",
    name: "user_options",
    message: "What would you like to do?",
    choices: ["my-tweets","spotify-this-song","movie-this", "do-what-it-says"]
    }
])
.then(function(response){
    switch (response.user_options){
        case "my-tweets":
            var params = {
                screen_name: "THR",
                count: 20
            };
            client.get('statuses/user_timeline', params, function(error, tweets, response) {
                if (!error) {
                    for (i = 0; i < tweets.length; i++) { 
                        console.log(tweets[i].text)
                        console.log(tweets[i].created_at)
                        console.log()
                    }
                }
            });
            break;
    }
})


