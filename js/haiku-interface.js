var Haiku = require('./../js/haiku.js').haikuModule;

$(document).ready(function(){
  $('#text-entry').submit(function(event){
    event.preventDefault();
    console.log("hello");
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
  $('#solution').append("<li>" + element + "</li>");
    });
  });
});
