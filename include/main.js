document.onLoad = getSource("navigation", "navigation");
document.onLoad = getSource("blog", "content");
nav_menu_visible = "none";
function getSource(href, target)	{
	var xmlhttp	=	new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()	{
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)	{
			document.getElementById(target).innerHTML = xmlhttp.responseText;
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
	}
	href = "/content/"+href+".html";
	xmlhttp.open("GET", href, true);
	xmlhttp.send();
}

function loadImage(href)	{
	document.getElementById("main_image").src = href;
}

function toggleMenu(caller)	{
	div = document.getElementById("nav_menu");
	if(nav_menu_visible == "none")	{
		nav_menu_visible = "inline-flex";
	}
	else	{
		nav_menu_visible = "none";
	}
	div.style.display = nav_menu_visible;
	console.log(div.style.display);
}
