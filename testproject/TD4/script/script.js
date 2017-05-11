function selection() {
    document.body.addEventListener("click", selection2);


	var frameInsert = document.createElement("div");
    frameInsert.id = "frameInsert";
  
    var DIV = document.createElement("input");
    DIV.type = "button";
    DIV.value= "DIV";
    DIV.addEventListener("click", insertB);
    frameInsert.appendChild(DIV);
    

    var P = document.createElement("input");
    P.type = "button";
    P.value= "P";
    P.addEventListener("click", insertB);
    frameInsert.appendChild(P);
	

	var H2 = document.createElement("input");
    H2.type = "button";
    H2.value= "H2";
    H2.addEventListener("click", insertB);
    frameInsert.appendChild(H2);
	

	var toInsert = document.createElement("input");
    toInsert.type = "text";
    toInsert.id = "toInsert";
    frameInsert.appendChild(toInsert);


	var element = document.body;
	var child = document.getElementById("h1");
	element.insertBefore(frameInsert,child);
}

function selectionInit(event) {

	var element = event.target;

    if (element.classList.contains('colorClick'))
    {
    	element.classList.remove('colorClick');
    }
    
    else 
    {
    	element.classList.add('colorClick');
    }

}



function selection2(event) {
  if (!document.getElementById("frameInsert").contains(event.target)) {
    var element = event.target;
    var previousElement = null;

	
	if (previousElement == element)
	{
    	element.classList.add('blueClick');
	}
	else
	{
		previousElement.classList.remove('blueClick');
		element.classList.add('blueClick');
	}
    
    
    previousElement = element;

  }
}

function insertB(event)
{
    var body = document.body;
    var newNode = document.createElement(event.target.value);
    newNode.innerHTML = document.getElementById("toInsert").value;

    body.appendChild(newNode);
}
    

