jQuery(document).ready(function($) {
	$con_left_one = $('#con_left_one');
	$con_left_one_bottom = $('#con_left_one_bottom');
	$con_right_one_btn = $('#con_right_one_btn');
	$con = $('#con');

	 $con_left_one_bottom.click(function(event) {
	 });

	 $con.children().children().each(function(index, el) {
	 	// $(this).css('position', 'relative');
	 	// $(this).append('<div id="inner"></div>');
	 	$(this).hover(function() {
	 		$(this).children('.inner').slideDown(400);
	 	}, function() {
	 		$(this).children('.inner').slideUp(400);
	 	});
	 });

	 $con_right_one_btn.click(function(event) {
	 	window.location.href = '../back/index.html';
	 });

});