// display current day on page
$('#currentDay').text(moment().format('dddd, MMMM Do'));

$(document).ready(function() {
    // listen for save button clicks
    $('.saveBtn').on('click', function() {
      // get nearby values
      var value = $(this)
        .siblings('.description')
        .val();
      var time = $(this)
        .parent()
        .attr('id');
  
      // save in localStorage
      localStorage.setItem(time, value);
  
    //   // Show notification that item was saved to localStorage by adding class 'show'
    //   $('.notification').addClass('show');
  
      // Timeout to remove 'show' class after 5 seconds
      setTimeout(function() {
        $('.notification').removeClass('show');
      }, 5000);
    });
  
    function newHour() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
      // $('.time-block').each(function() {
      //   var blockHour = parseInt(
      //     $(this)
      //       .attr('id')
      //       .split('-')[1]
      //   );
      for (var i=0; i < textArea; i++) {
        var blockHour = parseInt(textArea[i].id)
  
        // check if time is past, present, or future
        //if blockHour is smaller than currentHour then past
        if (blockHour < currentHour) {
          $(textArea).addClass('past');
        //if blcokHour is equal to current Hour then present
        } else if (blockHour === currentHour) {
          $(textArea).removeClass('past');
          $(textArea).addClass('present');
        //if neither is true then future
        } else {
          $(textArea).removeClass('past');
          $(textArea).removeClass('present');
          $(textArea).addClass('future');
        };
      
      };
    
  
    newHour();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(newHour, 15000);
  
    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
    
  }});
  