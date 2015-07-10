// Select all the necessary HTML elements
var $tabs = $('.tabs');
var $panels = $('.panel');

// When one of the tab buttons is clicked
$tabs.on('click', 'a', function (e) {
  // Stop the link from going to another page
  e.preventDefault();
  // Find the ID of the matching panel from the href attribute
  var id = $(this).attr('href');

  // Find the currently open panel and hide it
  $panels.filter(':not([hidden])').attr('hidden', true);
  // Using the ID, open the new panel
  $(id).removeAttr('hidden');

  // Find the currently highlighted tab button and remove the current class
  $tabs.find('.js-current').removeClass('js-current');
  // Add the current class to the new tab button
  $(this).addClass('js-current');
});
