// display current day on top of the page
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

    // save entered tasks
    localStorage.setItem(time, value);

  });
});


  $(document).ready(function () {
    
    // get current number of hours
    var hour = moment().hours();
    
    console.log(hour);

    // loop over time blocks
    for (var i = 9; i < 18; i++) {

      // check if time is past, present, or future
      //if hour is smaller than i then future
      if (hour < i) {
        $('#'+ i).addClass("future");
        console.log('future');
        //if Hour is equal to i then present
      } else if (hour === i) {
        $('#'+i).removeClass("future");
        $('#'+i).addClass("present");
        console.log('present');
        //if neither is true then future
      } else {
        $('#'+i).removeClass("future");
        $('#'+i).removeClass("present");
        $('#'+i).addClass("past");
        console.log('past');
      };

      ;
    };

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
