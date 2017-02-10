//list the requirements
//includes the keys from the keys.js file
var keys = require("./keys.js");
var spotify = require("spotify");

//command for node
var command = process.argv[2];
var movieTitle = process.argv[3];
var trackName = process.argv[3];

//store twitterKeys from keys.js file inside a variable for ease of use
var getTweets = keys.twitterKeys;




//THE FUNCTIONS//


//print user's tweets with a function
function printTweets() {
	//retrieve user tweets!
	getTweets.get('statuses/user_timeline', function(error, tweets, response) {

	  if(error) {
	  	console.log(error);
	  }


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
	console.log("................")


	if(trackName === undefined) {
		trackName = 'the sign ace of base';
	}


	spotify.search({ type: 'track', query: trackName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    //logs the results 
    console.log("YOUR SEARCH RESULTS:")
 	for (results in data.tracks.items) {
 	console.log("________________________________________________________________________________________")
    console.log("ARTIST:  " + data.tracks.items[results].artists[0].name);
    console.log("SONG:  " + data.tracks.items[results].name);
    console.log("ALBUM:  " + data.tracks.items[results].album.name + "  (" + data.tracks.items[results].album.album_type + ")");
    console.log("PREVIEW:  " + data.tracks.items[results].preview_url);
    console.log("________________________________________________________________________________________")
}
});
}


//print movie results
function printMovieResults() {

	console.log("running code")
	console.log("............")

	//require request package
	var request = require('request');


	//if there is no movie title entered, make it "Mr. Nobody"
	if(movieTitle === undefined) {
		movieTitle = 'Mr. Nobody';
	}


	var options = {
		url: "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&tomatoes=true&r=json",
		headers: {
			'User-Agent': 'request'
		}
	}

	//run the request module on a URL with a JSON
	request(options, function (error, response, body) {


	//if there were no errors and the response code was 200(i.e. the request was successful)..
	if(!error && response.statusCode === 200) {

		//converting to JSON object and then choosing properties to print the value in console
		title = JSON.parse(body).Title;
		year = JSON.parse(body).Year;
		console.log("__________________________________")
		console.log(title.toUpperCase() + " (" + year + ")");
		console.log("Country:  " + JSON.parse(body).Country);
		console.log("Language:  " + JSON.parse(body).Language);
		console.log("Actors:  " + JSON.parse(body).Actors);
		console.log("---PLOT-------------------------------------------------------------------------------")
		console.log(JSON.parse(body).Plot);
		console.log("--------------------------------------------------------------------------------------")
		console.log("IMDB rating:  " + JSON.parse(body).imdbRating);
		console.log("Rotten Tomatoes Rating:  " + JSON.parse(body).tomatoRating);
		console.log("Rotten Tomatoes URL:  " + JSON.parse(body).tomatoURL);
	} else {
		console.log(response.statusCode);
	}
});

}



//do what the text document says to do..
function doWhatItSays() {

	//require fs package to read random file
	var fs = require("fs");

	//read random text file
	fs.readFile("random.txt", "utf8", function(error, data) {

		//split array into parts at the commas
		var dataArr = data.split(",");
		console.log(dataArr);

		
		//first item in array becomes command
		//second item in array becomes the track name being searched for or movie title.
		command = dataArr[0];
		trackName = dataArr[1];
		movieTitle = dataArr[1];
	


		//follow through with other commands in order to run the text as those commands
		carryOutCommands();

	});

}







//THE COMMANDS TO BE USED (INSIDE A COMMAND!)//

function carryOutCommands() {
//Use specified functions based on which command is being used
switch (command) {

	//if my-tweets is in process.argv[2]...
	case "my-tweets":

		//print the tweets
		printTweets();

		break;

	//if spotify-this-song is in process.argv[2]...
	case "spotify-this-song":
		console.log(trackName);
		//spotify the song
		printSpotifyResults()

		break;

	//if movie-this is in process.argv[2]...
	case "movie-this":
		
		//access omdb api and print those results
		printMovieResults();

		break;

	//if there is not a valid command entered
	default:
	 	console.log("Sorry, that's not a known command.");
}
}


//Properly matching commands to their functions in a specific order so that do-what-it-says works appropriately
if (command === "do-what-it-says") {
	
		//do what says function here
		doWhatItSays();

	} 
else if (command === "spotify-this-song" || command === "movie-this" || command === "my-tweets") {
	carryOutCommands();
} 
else {
	 	console.log("Sorry, that's not a known command.");
}

//append the data 
// var fs = require("fs");

// fs.readFile('MINGW64:/', function(error, data) {
// 	if (error) {
// 		console.log(error);

// 	}
// 	else {

// fs.appendFile('log.txt', data, function(err) {

// 	//if error experienced, log it
// 	if (err) {
// 		console.log(err);
// 	}

// 	//if no error, log content added
// 	else {
// 		console.log("Content Added!");

// 	}

// 	});
// }

// });





	/*BONUSES
		In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
		Make sure you append each command you run to the log.txt file. 
		Do not overwrite your file each time you run a command.
	*/
	