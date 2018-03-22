import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import '../.env';

var MoviePick = require('./moviepick.js').moviePick;

var displayData = function(response) {
  response.results.forEach(function(result) {
    $('.showList').append('<li>' + result.title + '</li>');
  });
}

$(document).ready(function() {
  var moviePick = new MoviePick();

  $('#yearClick').click(function (event) {
    $('.showList').empty()
    event.preventDefault();
    console.log(userInput);
    var userInput = $('#year').val()
    $('#showInfo').text(`Here are some of the most popular movies for ` + userInput + `.`)
    MoviePick.prototype.getData(userInput, displayData)
  });
});
