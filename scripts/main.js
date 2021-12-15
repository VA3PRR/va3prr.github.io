function load_nav() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("navigation").innerHTML = this.responseText;
		}
	};
	//document.getElementById("footer").innerHTML = "acquiring data";
	xhttp.open("GET", "./navigation.html", true);
	xhttp.setRequestHeader("Content-type", "text/html");
	xhttp.send();
	//document.getElementById("footer").innerHTML = "transaction complete";
}
load_nav();
