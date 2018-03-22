import $ from 'jquery';
import dotenv from 'dotenv';
dotenv.load()

export class MoviePick {
  getBest(userInput, displayData) {
  const tmdbKey = process.env.API_KEY
    $.get(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&primary_release_year=${userInput}&vote_count.gte=100`)
    .then(response => {
      displayData(response);
    })
    .fail(() => 'something went wronggggg')
  }

  getWorst(userInput, displayData) {
  const tmdbKey = process.env.API_KEY
    $.get(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&primary_release_year=${userInput}&vote_average.lte=5&vote_count.gte=100`)
    .then(response => {
      displayData(response);
    })
    .fail(() => 'something went wronggggg')
  }
}
