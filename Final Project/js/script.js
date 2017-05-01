$(document).ready(function(){

$(".hide").hide();
$(".read-more").click(showStuff);
$(".read-less").click(hideStuff);
$(".music-pic").click(doModalStuff);
$("#modal").click(clearModal);

function showStuff(e) {
	e.preventDefault();
	$(this).siblings(".hide").first().slideDown();
	$(this).siblings(".read-less").first().show();
	$(this).hide();
}

function hideStuff(e) {
	e.preventDefault();
	$(this).prevAll(".show-this-on-click").last().slideUp();
	$(this).prevAll(".read-more").last().show();
	$(this).hide();
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

// function showStuff(){
// 	event.preventDefault();

// 	// $(this).find("div").slideDown("fast");
// 	$(".show-this-on-click").slideDown("fast");
// 	$(".read-more").hide();
// 	$(".read-less").show();
// }

// function showStuff(e){
//   e.preventDefault();
//   $(this).siblings('.show-this-on-click').slideDown();
//   $(this).hide();
//   $(this).siblings(".read-less").show();
// }

// function hideStuff(e){
// 	e.preventDefault();
// 	$(this).prev().slideUp();
// 	$(this).hide();
// 	$(this).prev().prev().show();
	// $(".show-this-on-click").slideUp("fast", function(){
	// 	$(".read-less").hide();
	// 	$(".read-more").show();
	// });
// }
});
