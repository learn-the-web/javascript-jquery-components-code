var $btn = $('.btn');
var $panel = $('.panel');

$btn.on('click', function () {
  $panel.toggleClass('js-panel-open');
});
