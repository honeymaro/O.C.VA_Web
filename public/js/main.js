$(document).ready(function(){
	$("body").on("focus", ".main-enter-input", function(){
		$(".main").addClass("selected");
	});

	$("body").on("focusout", ".main-enter-input", function(){
		$(".main").removeClass("selected");

	});

	$("#main-form").submit(function(e){
		e.preventDefault();
		$(".main-enter-submit").addClass("loading");
	})
	
})