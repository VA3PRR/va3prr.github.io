function load_nav() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("navigation").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "./navigation.html", true);
	xhttp.setRequestHeader("Content-type", "text/html");
	xhttp.send();
}
function doLoad(resource)	{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("main-content").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", resource, true);
	xhttp.setRequestHeader("Content-type", "text/html");
	xhttp.send();
}
load_nav();
