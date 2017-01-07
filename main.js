$(document).ready(function() {
	// Time display function
	function updateTime() {
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var period;
		
		if(hours == 0) {
			hours = "0" + hours;
		}
		
		if(minutes < 10) {
			minutes = "0" + minutes;
		}
		
		if(hours > 11) {
			period = "PM";
		} else period = "AM";
		
		
		
		$("#time").text(hours + ":" + minutes + " " + period);
	}
	
	// Auto-refresh time
	setInterval(updateTime, 1000);
});