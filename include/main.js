document.onLoad = getSource("navigation", "navigation");
document.onLoad = getSource("main", "content");
function getSource(href, target)	{
	var xmlhttp	=	new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()	{
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)	{
			document.getElementById(target).innerHTML = xmlhttp.responseText;
		}
		else	{
			console.log(xmlhttp.status);
		}
	}
	href = "/content/"+href+".html";
	xmlhttp.open("GET", href, true);
	xmlhttp.send();
}

function getPage(href)	{
	var xmlhttp	=	new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()	{
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)	{
			document.getElementById("content").innerHTML = xmlhttp.responseText;
		}
		else	{
			console.log(xmlhttp.status);
		}
	}
	href = "/content/"+href+".html";
	xmlhttp.open("GET", href, true);
	xmlhttp.send();
}
