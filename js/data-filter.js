// Select all the HTML elements we need
var $items = $('.items');
var $name = $('.name');
var $diet = $('.diet');
var $period = $('.period');

// Loop over all the dinosaurs in the data.js file
dinos.forEach(function (item, i) {
  // Create a new <option> tag for each dinosaur
  $items.append('<option value="' + i + '">' + item.name + '</option>');
});

// When the <select> box is changed
$items.on('change', function () {
  // Get the <select> box's value to determine which dinosaur was selected
  var dino = dinos[$items.val()];

  if (dino) {
    // If a dinosaur was chosen:
    // Fill the HTML tags with the correct information from data.js
    $name.html(dino.name);
    $diet.html(dino.diet);
    $period.html(dino.period);
  } else {
    // If no dinosaur was chosen:
    // Empty all the HTML tags
    $name.html('');
    $diet.html('');
    $period.html('');
  }
});
