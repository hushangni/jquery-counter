$(document).ready(function() {
	// keep track of count
	let counter = 0;
	// listen for a click on plus button
	// when button is clicked +1 to count
	$('#plus').on('click', function() {
		counter++;
		$('span.counter').text(counter);
	});
	// listen for a click on minus button
	// when button is clicked -1 to count
	$('#minus').on('click', function() {
		counter--;
		$('span.counter').text(counter);
	})
});