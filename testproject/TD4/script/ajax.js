var xhr = null;
function initXhr(){
		xhr = new XMLHttpRequest();
}
initXhr();

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200) //xhr.status == 0 si ftp ou file
		//maCallback(xhr.responseText); // ou maCallback(xhr.responseXML);
};

function maCallback(response){
	console.log(response);
}

function onLoaded(){
	var reqGet = document.getElementById(req_get);

	reqGet.addEventListener("click", maCallback);
	sendReq1();
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
	xhr.open("get", "index.php?prenom=Chrsitopher&nom=SABOYA", true);
	xhr.send(null);
}

function sendReq2() {
	xhr.open("post", "index2.php", true);
	xhr.send("prenom=Chrsitopher&nom=SABOYA");
}
