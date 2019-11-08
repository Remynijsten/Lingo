var firstWORD = "HELLO";


function createWORD(){
	for (i=1;i<6;i++){
	var para = document.createElement("p");

	var node = document.createTextNode(firstWORD.charAt(i-1));
	para.appendChild(node);
	var playbord = document.getElementById("playbord");
	playbord.appendChild(para);

	console.log(i + firstWORD.charAt(i-1));
	}
}

