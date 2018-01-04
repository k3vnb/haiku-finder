// var Haiku = require('./../js/haiku.js').haikuModule;
var syllable = require('syllable');

$(document).ready(function(){
  $('#text-entry').submit(function(event){
    event.preventDefault();
    var theText = $('#the-text').val();
    console.log(syllable(theText));
    output.forEach(function(element) {
  $('#solution').append("<li>" + element + "</li>");
    });
  });
});
