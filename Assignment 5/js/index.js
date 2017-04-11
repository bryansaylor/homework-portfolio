$(document).ready(function(){

$("#submit-btn").click(setBackground);

function setBackground() {
	event.preventDefault();
var input = $("#city-type").val().trim();
	input = input.toLowerCase();

if (input == "NY".toLowerCase() || input == "New York".toLowerCase() || input == "New York City".toLowerCase()){
	$("body").attr("class", "nyc");
} else if (input == "Los Angeles".toLowerCase() || input == "LA".toLowerCase() || input == "LAX".toLowerCase()){
	$("body").attr("class", "la");
} else if (input == "San Francisco".toLowerCase() || input == "SF".toLowerCase() || input == "Bay Area".toLowerCase()){
	$("body").attr("class", "sf");
} else if (input == "Austin".toLowerCase() || input == "ATX".toLowerCase()){
	$("body").attr("class", "austin");
} else if (input == "Sydney".toLowerCase() || input == "SYD".toLowerCase()){
	$("body").attr("class", "sydney");
} else {
	$("body").attr("class", "default");
	alert("We currently don't have images for this city. Check back later!");}

$("#city-type").val("");
}

});