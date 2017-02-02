//write code needed to grab the data from keys.js.  Store the keys in a variable
//make it so liri.js can take in one of the following commands 
		//'my-tweets'
		//'spotify-this-song'
		//'movie-this'
		//'do-what-it-says'


			/*Explained:
				MY TWEETS:  Will show last 20 tweets and when they were created at in your terminal/bash window

				SPOTIFY: Will show *Artist(s) 
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