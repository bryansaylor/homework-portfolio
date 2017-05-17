$(document).ready(function(){

$(".hide").hide();
$(".read-more").click(showStuff);
$(".read-less").click(hideStuff);
$(".music-pic").click(doModalStuff);
$("#modal").click(clearModal);
$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
       clearModal(); //for my wife
    }
});


function showStuff(e) { //shows hidden text content and hides 'show more' button and shows read less button
	e.preventDefault();
	$(this).siblings(".hide").first().slideDown("fast");
	$(this).siblings(".read-less").first().show();
	$(this).hide();
}

function hideStuff(e) { //hides text from above and read less btton and shows show more button
	e.preventDefault();
	$(this).prevAll(".show-this-on-click").last().slideUp("fast", function(){
		$(this).prevAll(".read-more").last().show();
	});
	$(this).hide();
}

function doModalStuff() { //activates modal to 'zoom' clicked picture
	var picUrl = $(this).attr("src"); //gets specific url of picture clicked
	$("#modal").addClass("modal-active");
	$("#modal").append("<img class='music-pic big-pic' src="+picUrl+">");
}

function clearModal() { //clears modal class and emptird appended html from above
	$("#modal").removeClass("modal-active");
	$("#modal").empty();
}


$("nav ul li:first-child").click(function(){ //adds 'show' class to nav for mobile
	console.log("hamburger clicked");
	$("nav").toggleClass("show");
	});


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
