$(document).ready(function(){

$(".hide").hide();
$(".read-more").click(showStuff);
$(".read-less").click(hideStuff);
$(".learn-more").click(showLittleStuff);

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

});

