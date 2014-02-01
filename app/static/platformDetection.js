function isAndroid(){
    return navigator.userAgent.indexOf("Android") !== -1;
}

function isIOS(){
   return  !!(navigator.userAgent.match(/iPhone/i) ||
           navigator.userAgent.match(/iPod/i) ||
           navigator.userAgent.match(/iPad/i));
}

function isWindows() {
	return navigator.platform.indexOf("Win32") !== -1;
}

function isLinux() {
	return navigator.platform.indexOf("Linux") !== -1;
}

function isMac() {
	return navigator.platform.indexOf("Mac") !== -1;
}

var platform = "Other";

function check(){
	if (isAndroid()){
		platform = "an Android Device";
	}

	if (isIOS()){
		platform = "an iOS Device"
	}

	if (isWindows()){
		platform = "a Windows Device"
	}

	if (isLinux() && !(isAndroid())){
		platform = "a Linux Device";
	}

	if (isMac()){
		platform = "a Mac";
	}

	$("#platformInfo").append("Clearly, you are using " + platform);
}

$(document).ready(function() {
	check();
})