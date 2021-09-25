// display current day on page
$('#currentDay').text(moment().format('dddd, MMMM Do'));

$(document).ready(function () {
  // listen for save button clicks
  $('.saveBtn').on('click', function () {
    // get nearby values
    var value = $(this)
      .siblings('.description')
      .val();
    var time = $(this)
      .parent()
      .attr('id');

    // save in localStorage
    localStorage.setItem(time, value);


    // Timeout to remove 'show' class after 5 seconds
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  });
});




  $(document).ready(function () {
    var textAreas = $('textarea');
    console.log(textAreas);
    // get current number of hours
    // var hour = moment().hours();
    var hour = 17;
    console.log(hour);

    // loop over time blocks
    for (var i = 0; i < textAreas.length; i++) {
      var currentTextArea = textAreas[i];
      var currentId = currentTextArea.id
      console.log(currentId);

      // check if time is past, present, or future
      //if currentId is smaller than hour then past
      if (hour < currentId) {
        $(textAreas).addClass('future');
        //if blcokHour is equal to current Hour then present
      } else if (currentId === hour) {
        $(textAreas).removeClass('future');
        $(textAreas).addClass('present');
        //if neither is true then future
      } else {
        $(textAreas).removeClass('future');
        $(textAreas).removeClass('present');
        $(textAreas).addClass('past');
      };

      ;
    };



    // set up interval to check if current time needs to be updated
    // var interval = setInterval(newHour, 15000);

    // load any saved data from localStorage
    $('#nine .description').val(localStorage.getItem('nine'));
    $('#ten .description').val(localStorage.getItem('ten'));
    $('#eleven .description').val(localStorage.getItem('eleven'));
    $('#twelve .description').val(localStorage.getItem('twelve'));
    $('#thirteen .description').val(localStorage.getItem('thirteen'));
    $('#fourteen .description').val(localStorage.getItem('fourteen'));
    $('#fifteen .description').val(localStorage.getItem('fifteen'));
    $('#sixteen .description').val(localStorage.getItem('sixteen'));
    $('#seventeen .description').val(localStorage.getItem('seventeen'));


  });
