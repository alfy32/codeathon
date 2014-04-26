$(document).ready(function () {

  $.get('/event?cityid=1', function(resp) {
    $('.events').empty();
    $('.events').append('<h3>Upcomming Events</h3>');

    for(var i in resp.data) {
      var ev = resp.data[i];
      console.log(ev);

      var div = $('<div>');

      div.attr('class', 'event');
      div.append($('<p>').text(ev.eventid));
      div.append($('<p>').text(ev.date));
      div.append($('<p>').text(ev.description));

      $('.events').append(div);
    }

    $('.events').append($('<div>').css('clear', 'both'));
  });

});
