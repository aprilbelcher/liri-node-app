// console.log("this is working");
var inquirer = require('inquirer');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var accessKeys = require("./keys.js");

var client = new Twitter({
    consumer_key: accessKeys.consumer_key,
    consumer_secret: accessKeys.consumer_secret,
    access_token_key: accessKeys.access_token_key,
    access_token_secret: accessKeys.access_token_secret
  });

var spotify = new Spotify({
id: accessKeys.Client_ID,
secret: accessKeys.Client_Secret
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
                    for (tweet = 0; tweet < tweets.length; tweet++) { 
                        console.log(tweets[tweet].text)
                        console.log(tweets[tweet].created_at)
                        console.log()
                    }
                }
            });
            break;
        
        case "spotify-this-song":
            inquirer.prompt([
                {
                type: "input",
                name: "songName",
                default: "The Sign, Ace",
                message: "Enter a song"
                }
            ])
            .then(function(answer){
                spotify.search({ type: 'track', query: answer.songName, limit: 10}, function(err, data) {
                    // if (err) {
                    //   return console.log('Error occurred: ' + err);
                    // }
                    var songs = data.tracks.items;
                    console.log(songs[5], songs.length);
                  for (song = 0; song < songs.length; song++ ){
                    console.log("Artist: " + songs[song]); 
                    console.log("Song: " + answer.songName);
                    console.log("Preview Link: " + songs[song].external_urls.spotify);
                    console.log("Album: " + songs[song].album.name);
                    console.log();
                  } 
               

                  })     
            });
            break;
        case "movie-this":
            inquirer.prompt([
                {
                type: "input",
                name: "movieName",
                default: "Mr. Nobody",
                message: "Enter a movie name"
                }
            ])
    };
});


