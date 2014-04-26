$(document).ready(function () {

  $.get('/event?cityid=1', function(resp) {
    $('.events').empty();
    $('.events').append('<h3>Upcomming Events</h3>');
    $('.events').append('<button onclick="addEvent()">Add Event</button>');

    for(var i in resp.data) {
      var ev = resp.data[i];
      console.log(ev);

      var div = $('<div>');

      div.attr('class', 'event');
      div.append($('<p>').attr('class', 'date').text('Date: ' + ev.date + ' Time: ' + ev.time));
      div.append($('<p>').attr('class', 'desc').text(ev.description));

      $('.events').append(div);
    }

    $('.events').append($('<div>').css('clear', 'both'));
  });

  $('.events').css('height', ''+ (screen.height - 280) + 'px')
});

function addEvent() {
  window.location = 'AddEvent.html';
}