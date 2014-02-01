$(document).ready(function() {
	$("#driverform").submit(function(event){
		event.preventDefault();
		location.href = "/index";
	});
});