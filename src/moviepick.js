import $ from 'jquery';
var dotenv = require('dotenv')
dotenv.load()

var MoviePick = function() {

}

MoviePick.prototype.getData = function(userInput, displayData) {
const tmdbKey = process.env.API_KEY
  $.get(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&primary_release_year=${userInput}&vote_count.gte=1000`)
  .then(function(response) {
    displayData(response);
    console.log("HERE IS USER ENTERED YEAR", userInput);
  })
  .fail(function() {
    return 'something went wronggggg'
  })
}

exports.moviePick = MoviePick;


// export class MoviePick {
//
//   constructor(userInput) {
//     this.userInput = userInput;
//   }
//
//   getData() {
//     const tmdbKey = process.env.API_KEY
//     $.get(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&primary_release_year=${userInput}&vote_count.gte=1000`)
//     .then(function(response) {
//       displayData(response);
//       console.log("HERE IS USER ENTERED YEAR", userInput);
//     });
//   }
//   .fail() {
//       return 'something went wronggggg'
//     });
//   }
// }
