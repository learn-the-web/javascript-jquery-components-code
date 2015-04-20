var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');
var $lbHeading = $('.lightbox-heading');
var $lbDesc = $('.lightbox-desc');

$thumbs.on('click', 'a', function (e) {
  e.preventDefault();
  var big = $(this).attr('href');
  $lbImg.attr('src', big);
  $lb.attr('data-state', 'visible');
  $lbHeading.html($(this).attr('data-title'));
  $lbDesc.html($(this).attr('data-desc'));
});

$btnClose.on('click', function () {
  $lb.attr('data-state', 'hidden');
});
