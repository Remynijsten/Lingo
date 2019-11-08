var word = "H....";
var firstWORD = word.split('');
firstWORD.join('');
var word2 = "HELLO";
var firstWORD2 = word2.split('');

var form = document.createElement("FORM");
var input = document.createElement('INPUT');
var inputbox = document.getElementById("input");
input.type = "TEXT";
input.name = "word";
form.style.textAlign = "center";
input.style.width = "16vw";
input.style.height = "7.5vh";
input.style.borderRadius = "25px";
input.style.marginTop = "5px";
input.style.fontSize = "65px";
input.style.background = "transparent";
input.style.color = "white";
input.style.textAlign = "center";
input.style.textTransform = "uppercase";
input.id = "forminput";

form.setAttribute('action', 'javascript:void(0);');
input.setAttribute('autocomplete', 'off');



form.appendChild(input);
inputbox.appendChild(form);

function createWORD(){
	input.value.split('');

	

	if (input.value[0] == firstWORD2[0]){	
		firstWORD[0] = firstWORD2[0];
	}
	if (input.value[1] == firstWORD2[1]){	
		firstWORD[1] = firstWORD2[1];
	}
	if (input.value[2] == firstWORD2[2]){	
		firstWORD[2] = firstWORD2[2];
	}
	if (input.value[3] == firstWORD2[3]){	
		firstWORD[3] = firstWORD2[3];
	}
	if (input.value[4] == firstWORD2[4]){	
		firstWORD[4] = firstWORD2[4];
	}





	console.log(firstWORD);
	console.log(firstWORD2);
	for (i=1;i<6;i++){
	var para = document.createElement("p");
	var node = document.createTextNode(firstWORD[i-1]);
	para.appendChild(node);
	var playbord = document.getElementById("playbord");
	playbord.appendChild(para);
	input.value = "";
	}
}






document.getElementById('input').onkeydown = function(e){
   if(e.keyCode == 13){
     createWORD();
     
   }
};

createWORD();
