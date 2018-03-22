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
    e.preventDefault();
    $('.showList').empty()
    $('#rayLewisText').empty()
    let userInput = $('#year').val()
    $('#showInfo').text(`Here are some of the most popular movies for ` + userInput + `.`)
    MoviePick.prototype.getBest(userInput, displayData)
  });

  $('#yearWorst').click(e => {
    e.preventDefault();
    $('.showList').empty()
    $('#rayLewisText').empty()
    let userInput = $('#year').val()
    $('#showInfo').text(`Here are some of the least popular movies for ` + userInput + `.`)
    MoviePick.prototype.getWorst(userInput, displayData)
  });

  $('#rayLewis').click(e => {
    e.preventDefault();
    let killer = "Ray Lewis"
    $('.showList').empty()
    $('#showInfo').empty()
    $('#rayLewisText').text(killer)
  });
});
