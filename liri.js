//list the requirements
//includes the keys from the keys.js file
var keys = require("./keys.js");
var spotify = require("spotify");

//command for node
var command = process.argv[2];
var trackName = process.argv[3];

//store twitterKeys from keys.js file inside a variable for ease of use
var getTweets = keys.twitterKeys;



//print user's tweets with a function
function printTweets() {
	//retrieve user tweets!
	getTweets.get('statuses/user_timeline', function(error, tweets, response) {

	  if(error) {
	  	console.log(error);
	  }

	  //for (i=0, i<=20, i++); >>to print out 20 tweets?

	  //log out the most recent tweets by looping through the tweets object
	  for (myTweets in tweets) {
	  	console.log("___________________________________________________________________________")
	  	console.log(tweets[myTweets].created_at)
	  	console.log(tweets[myTweets].text)
	  	console.log("___________________________________________________________________________")

	  }
	  // console.log(tweets[0].text);  // The favorites. 
	  // console.log(response);  // Raw response object. 
	});

}


//print spotify search results with a function
function printSpotifyResults() {

	console.log("running code");


	spotify.search({ type: 'track', query: trackName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

 	for (results in data.tracks.items) {
 	console.log("________________________________________________________________________________________")
    console.log("ARTIST:  " + data.tracks.items[results].artists[0].name);
    console.log("SONG:  " + data.tracks.items[results].name);
    console.log("PREVIEW:  " + data.tracks.items[results].preview_url);
    console.log("________________________________________________________________________________________")
}
});
}

//Use specified functions based on which command is being used
switch (command) {

	case "my-tweets":

		printTweets();

		break;

	case "spotify-this-song":

		//if track name not provided, the sign by ace of base is searched for.
		if(trackName === undefined) {
		trackName = 'the sign ace of base';
		printSpotifyResults();

		}

		else {
		//spotify this song function here
		printSpotifyResults()

		}

	case "movie-this":
		
		//movie this function here

		break;

	case "do-what-it-says":

		//do what says function here

		break;

	default:
	 	console.log("Sorry, that's not a known command.");

}
//write code needed to grab the data from keys.js.  Store the keys in a variable
//make it so liri.js can take in one of the following commands 
		//'my-tweets'
		//'spotify-this-song'
		//'movie-this'
		//'do-what-it-says'


			/*Explained:
				MY TWEETS:  Will show last 20 tweets and when they were created at in your terminal/bash window

				SPOTIFY: Will show 
					*Artist(s) 
					*Song name 
					*Preview link of song from spotify 
					* Album song is from  
				in window/terminal Bash 
				**If no song is provided then the program will default to "The Sign" by Ace of Base.  

				MOVIE THIS: Will output 
					*Title of movie 
					*Year movie came out
					*IMDB rating of movie
					*Country where movie was produced
					*Language of the movie
					*Plot of the movie
					*Actors in the movie
					*Rotten tomatoes rating
					*rotton tomatoes URL
				in window/terminal bash
				**If user doesn't type a movie in, program will output data for the movie "Mr. Nobody"

				DO WHAT IT SAYS: Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. 
					*Should run spotify-this-song for "I Want it That Way" as follows the text in random.txt
					*Can change the text in that document to test out feature for other commands */


	/*BONUSES
		In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
		Make sure you append each command you run to the log.txt file. 
		Do not overwrite your file each time you run a command.
	*/
	