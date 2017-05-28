console.log("test");
var xhr = null;
function initXhr(){
		xhr = new XMLHttpRequest();
}
initXhr();

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200) //xhr.status == 0 si ftp ou file
		maCallback(xhr.responseText); // ou maCallback(xhr.responseXML);
};

function maCallback(response){
	var h1 = document.createElement("h1");
	var doc = eval ('('+ response + ')');

	var affiche = document.createTextNode("salut "+doc["prenom"]+" "+doc["nom"]);
	h1.appendChild(affiche);
	document.body.appendChild(h1);
}

function onLoaded(){
	console.log("test3");
	document.getElementById("req_get").addEventListener("click",sendReq1);
	document.getElementById("req_post").addEventListener("click",sendReq2);

	//sendReq3();
}

/*function sendReq1() {
	xhr.open("get", "http://interactivelayer.com/clubic.rss", true);
	xhr.send(null);
}

function sendReq3() {
	xhr.open("post", "/proxy.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send
}
*/
function sendReq1() {
	var prenom = encodeURIComponent("christopher");
	var nom = encodeURIComponent("saboya");
	xhr.open("get", "index.php?prenom="+prenom+"&nom="+nom, true);
	xhr.send(null);
}

function sendReq2() {
	var prenom = document.getElementById("btn_post").value;
	var nom = document.getElementById("btn_post2").value;
	xhr.open("post", "index2.php", true);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.send("prenom="+prenom+"&nom="+nom);
}
console.log("test2");