const request = require("request");
const Spotify = require("node-spotify-api");
const moment = require("moment");

require("dotenv").config();

const spotifyKeys = require("./keys.js");


//spotify

const Spotify = require('node-spotify-api');
 
const Spotify = new Spotify({
  id: b3d2ff8924a74eea86e75153a6e965a3,
  secret: 1cd38c49b1614b9c84c7fdc9755005f6
});

//omdb

var request = require("request");

//request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }

  console.log("Movie Title: " + JSON.parse(body).Title);
  console.log("Year: " + JSON.parse(body).Year);
  console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
  console.log("Produced In: " + JSON.parse(body).Country);
  console.log("Language: " + JSON.parse(body).Language);
  console.log("Plot: " + JSON.parse(body).Plot);
  console.log("Actors: " + JSON.parse(body).Actors);
  

});