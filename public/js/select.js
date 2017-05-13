$(document).ready(function(){
	$("body").on("submit", "#select-form", function(e){
		e.preventDefault();
		location.href = "/prove"
	});
});