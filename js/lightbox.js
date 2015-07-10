// Select all the necessary HTML elements
var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');
var $lbHeading = $('.lightbox-heading');
var $lbDesc = $('.lightbox-desc');

// When one of the thumbnails is clicked
$thumbs.on('click', 'a', function (e) {
  // Stop the link from going to another page
  e.preventDefault();
  // Figure out what the URL is for the larger image
  var big = $(this).attr('href');
  // Put the larger image into the <img> tag for the lightbox
  $lbImg.attr('src', big);
  // Change the lightbox's data attribute so it becomes visible
  $lb.attr('data-state', 'visible');
  // Fill the title and description of the image into the lightbox
  $lbHeading.html($(this).attr('data-title'));
  $lbDesc.html($(this).attr('data-desc'));
});

// When the close button is pressed
$btnClose.on('click', function () {
  // Change the lightbox's data attribute so it becomes hidden
  $lb.attr('data-state', 'hidden');
});
