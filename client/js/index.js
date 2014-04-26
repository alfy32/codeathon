$(document).ready(function () {

  $.get('/event', function(data) {
    console.log(data);
  });

});