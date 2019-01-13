$(document).ready(function() {
	$('.img_card p').hide();
  $('.plus').on('click', function() {
		$(this).next().slideToggle(400);
	});
});