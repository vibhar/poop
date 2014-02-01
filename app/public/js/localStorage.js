var key = "vibhar";

function increment() {

	$("#total").html("");
	$("#session").html("");

	if (typeof(localStorage) !== "undefined") {

    	if (localStorage["localStorage" + key] != null) {
    		localStorage["localStorage" + key] = 1 + Number(localStorage["localStorage" + key]);
    	} else {
    		localStorage.setItem("localStorage" + key, 1);
    	}

	} else {
		alert("localStorage is undefined :(")
	}

	if (typeof(sessionStorage) !== "undefined") {

    	if (sessionStorage["sessionStorage" + key] != null) {
    		sessionStorage["sessionStorage" + key] = 1 + Number(sessionStorage["sessionStorage" + key]);
    	} else {
    		sessionStorage.setItem("sessionStorage" + key, 1);
    	}

	} else {
		alert("sessionStorage is undefined :(")
	}

	$("#total").append("Total Count: " + localStorage["localStorage" + key]);
	$("#session").append("Session Count: " + sessionStorage["sessionStorage" + key]);
}