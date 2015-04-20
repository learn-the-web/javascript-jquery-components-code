var $items = $('.items');
var $name = $('.name');
var $diet = $('.diet');
var $period = $('.period');

dinos.forEach(function (item, i) {
  $items.append('<option value="' + i + '">' + item.name + '</option>');
});

$items.on('change', function () {
  var dino = dinos[$items.val()];

  if (dino) {
    $name.html(dino.name);
    $diet.html(dino.diet);
    $period.html(dino.period);
  } else {
    $name.html('');
    $diet.html('');
    $period.html('');
  }
});
