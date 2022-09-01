// jokes NPM
const jokes = require('give-me-a-joke');
// to see functions - console.dir(jokes)
// colors NPM
const colors = require('colors');

// To get a random dad joke with rainbow colors
jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});