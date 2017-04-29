$(document).ready(function(){

$(".hide").hide();
$(".read-more").click(showStuff);
$(".read-less").click(hideStuff);
$(".learn-more").click(showLittleStuff);
$(".show-fig").click(showFigure);
// $(".hide-fig").click(hideFigure);

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

function showLittleStuff() {
	event.preventDefault();
	$("#learn-more-text").slideDown("fast");
	$(".learn-more").hide();		
}


function showFigure(){
	event.preventDefault();
	$(".music-pic").slideDown("fast");
	$(".show-fig").hide();
}

// function hideFigure(){
// 	event.preventDefault();
// 	$("#fig1").slideUp("fast");
// 	$(".show-fig").show();
// 	$(".hide-fig").hide();
// }
});

