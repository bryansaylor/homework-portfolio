$(document).ready(function(){
// Populate select list with cities (uses for loop to create options in HTML)
var index = 0;
var cities = ["Select A City", "NY", "LA", "SF", "ATX", "SYD"];
for(index = 0; index < cities.length; index++){
	$("select").append("<option value="+cities[index]+">"+cities[index]+"</option>");
}

// When the selection in the list is changed, set the background to the 
// correpsonding city (css classes were slightly altered)
$("select").change(setBackground);

function setBackground(){
	event.preventDefault();
	var cityName = $(this).attr("value"); // Gets city name as id of each option
	$("body").attr("class", cityName.toLowerCase()); // Converts to lowercase and sets
	// class of page to that city name (which will change the background).  The idea
	// is that the list of options has the same name as the css classes which will
	// change the background (after converting to lowercase)
}
});
