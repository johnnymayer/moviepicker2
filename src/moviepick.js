import $ from 'jquery';
var dotenv = require('dotenv')
dotenv.load()

var MoviePick = function() {

}

MoviePick.prototype.getData = function(userInput, displayData) {
const tmdbKey = process.env.API_KEY
 $.get(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&year=${userInput}&vote_average.gte=8&vote_count.gte=1000`)
  .then(function(results) {
    displayData(results);
  })
  .fail(function() {
    return 'something went wronggggg'
  })
}

exports.moviePick = MoviePick;
