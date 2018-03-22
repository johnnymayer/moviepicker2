import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import '../.env';

import {MoviePick} from './moviepick.js';

const displayData = response => {
  response.results.forEach(result => {
    $('.showList').append(`<li>${result.title}</li>`);
  });
};

$(document).ready(() => {
  const moviePick = new MoviePick();

  $('#yearClick').click(event => {
    $('.showList').empty()
    event.preventDefault();
    let userInput = $('#year').val()
    $('#showInfo').text(`Here are some of the most popular movies for ` + userInput + `.`)
    MoviePick.prototype.getData(userInput, displayData)
  });
});
