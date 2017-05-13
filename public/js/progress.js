var totalPercent = 0;
var nowSelected = 0;
var totalNum = 0;
$(document).ready(function () {
	totalNum = $(".progress-list-item").length;

});

function attack() {
	if(totalNum <= nowSelected){
		return;
	}

	$.ajax({
		url: '/api/v1/attack?type=' + $(".progress-list-item:eq("+nowSelected+")").attr("pg-id"),
		processData: false,
		contentType: false,
		dataType: "JSON",
		type: 'GET'
	}).done(function (data) {
		progress();
	}).fail(function (xhr, ajaxOptions, thrownError) {
		// if (xhr.status == 403) {
		// 	alert(JSON.parse(xhr.responseText).message);
		// }
		// else {
		// 	alert("error!");
		// }
		// $(".main-enter-submit").removeClass("loading");

	});
}

function progress(){

	$.ajax({
		url: '/api/v1/progress',
		processData: false,
		contentType: false,
		dataType: "JSON",
		type: 'GET'
	}).done(function (data) {

		

		if(data.status == 2){
			nowSelected++;
			attack();
		}
	}).fail(function (xhr, ajaxOptions, thrownError) {
		// if (xhr.status == 403) {
		// 	alert(JSON.parse(xhr.responseText).message);
		// }
		// else {
		// 	alert("error!");
		// }
		// $(".main-enter-submit").removeClass("loading");

	});
}