function getDistance(){

	var distance = 0;
	var lat1 = 40.443113; //Entropy
	var lon1 = -79.94206; //Entropy
	var lat2;
	var lon2;

	$("#geo").html("");

	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(displayPosition);
	}

	else {
		alert("Geolocation is not supported by this browser.");
	}

	function displayPosition(position) {
		lat2 = position.coords.latitude;
		lon2 = position.coords.longitude;

		var R = 6371; // km
		var dLat = (lat2-lat1) * (Math.PI/180);
		var dLon = (lon2-lon1) * (Math.PI/180);
		lat1 = lat1 * (Math.PI/180);
		lat2 = lat2 * (Math.PI/180);

		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c;

		distance = d;

		console.log("distance: " + distance);

		$("#geo").html(distance + " km.");

		return;
	}
}