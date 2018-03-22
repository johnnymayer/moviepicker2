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
  let moviePick = new MoviePick();

  $('#yearBest').click(e => {
    $('.showList').empty()
    e.preventDefault();
    let userInput = $('#year').val()
    $('#showInfo').text(`Here are some of the most popular movies for ` + userInput + `.`)
    MoviePick.prototype.getBest(userInput, displayData)
  });

  $(document).ready(() => {
    let moviePick = new MoviePick();

    $('#yearWorst').click(e => {
      $('.showList').empty()
      e.preventDefault();
      let userInput = $('#year').val()
      $('#showInfo').text(`Here are some of the least popular movies for ` + userInput + `.`)
      MoviePick.prototype.getWorst(userInput, displayData)
    })
  })
});
