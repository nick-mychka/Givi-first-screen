$(document).ready(function() {

	$(".burger_nav").on("click", (function() {
		$(this).toggleClass("open_in");
		$("nav").toggleClass("slide_menu");
	}));
});
