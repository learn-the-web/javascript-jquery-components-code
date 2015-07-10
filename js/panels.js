// Select all the necessary HTML elements
var $btn = $('.btn');
var $panel = $('.panel');

// When the button is clicked
$btn.on('click', function () {
  // Add/remove a class to the panel causing the CSS to display it open/closed
  $panel.toggleClass('js-panel-open');
});
