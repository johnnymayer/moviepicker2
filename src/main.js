import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import '../.env';

var MoviePick = require('./moviepick.js').moviePick;

var displayData = function(results) {
  for(let i = 0; i < results.length; i++){
    $('.showList').append('<li>' + results[i].title + '</li>');
  }
}

$(document).ready(function() {
  var moviePick = new MoviePick();

  $('#movie-year-form').submit(function (event) {
    event.preventDefault();

    var userInput = $('#year').val()
    moviePick.getData(userInput, displayData)
  });
});
