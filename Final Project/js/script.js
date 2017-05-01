$(document).ready(function(){

$(".hide").hide();
$(".read-more").click(showStuff);
$(".read-less").click(hideStuff);
$(".music-pic").click(doModalStuff);
$("#modal").click(clearModal);


function showStuff(){
	event.preventDefault();
	$("#show-this-on-click").slideDown("fast");
	$(".read-more").hide();
	$(".read-less").show();
}

function hideStuff(){
	event.preventDefault();
	$("#show-this-on-click").slideUp("fast", function(){
		$(".read-less").hide();
		$(".read-more").show();
	});
}

function doModalStuff() {
	var picUrl = $(this).attr("src");
	$("#modal").addClass("modal-active");
	$("#modal").append("<img class='music-pic big-pic' src="+picUrl+">");
}

function clearModal() {
	$("#modal").removeClass("modal-active");
	$("#modal").empty();
}

});
