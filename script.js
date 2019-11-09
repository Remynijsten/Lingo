var word = "H....";
var firstWORD = word.split('');
firstWORD.join('');
var word2 = "HELLO";
var firstWORD2 = word2.split('');
firstWORD2.join('');

var good = new Audio("music/good.mp3");
var bad = new Audio("music/bad.mp3");
var bgmusic = new Audio("music/bgmusic.mp3");
bgmusic.loop = true;


var form = document.createElement("FORM");
var input = document.createElement('INPUT');
var inputbox = document.getElementById("input");
input.type = "TEXT";
input.name = "word";
form.style.textAlign = "center";
input.style.margin = "0 auto";
input.style.width = "345px";
input.style.height = "80px";
input.style.outline = "0";
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




var btn = document.createElement("BUTTON");
btn.setAttribute('id', 'startBTN');
btn.innerHTML = "START";
btn.setAttribute('onclick', 'start()');
var main = document.getElementById("main");
main.style.opacity = "1";
document.getElementById('main').style.backgroundImage = "title.png"
main.appendChild(btn);

function start(){
	main.style.opacity = "0";
	
	

	btn.style.display = "none";
	
	bgmusic.play();
	setTimeout(function(){ 
		document.getElementById("main").style.backgroundImage = "url(bgleft.png)"
		main.style.opacity = "1"; 
		form.appendChild(input);
		inputbox.appendChild(form);
		createWORD();
	}, 2000);
}
var t = 0;
function createWORD(){

	for (i=1;i<6;i++){
		
		var para = document.createElement("p"); 
		para.setAttribute('class','Button' + i);
		para.style.background= "transparent";
		para.style.color = "white";
		para.style.border = "1px solid white"
		var node = document.createTextNode(firstWORD[i-1]);
		para.appendChild(node);
		var playbord = document.getElementById("playbord");
		playbord.appendChild(para);
		input.value = "";

		if (firstWORD[i-1] == firstWORD2[i-1]){
			document.getElementsByClassName('Button' + i)[t].style.background = "darkred";
		}
	}
	t++;
}

var x = -1;
function letterWORD(){
	x++;
	console.log(x);
	var enter = input.value.toUpperCase();
	
	enter.split('');	

	if (enter[0] == firstWORD2[0]){	// Veranderd nieuwe regel in juiste letterkeuze
		firstWORD[0] = firstWORD2[0];
			
			document.getElementsByClassName("Button1")[x].innerHTML = firstWORD[0];
			good.play();
			good.currentTime = 0;
	}
	else if (enter[0] != firstWORD2[0]){
			bad.play();
			bad.currentTime = 0;
	} // -------------------------------------------------------------------------------

	if (enter[1] == firstWORD2[1]){	
		firstWORD[1] = firstWORD2[1];
		setTimeout(function(){ 
			document.getElementsByClassName("Button2")[x].style.background = "darkred";
			document.getElementsByClassName("Button2")[x].innerHTML = firstWORD[1];
			good.play();
			good.currentTime = 0;
		}, 300);
	}
	else if (enter[1] != firstWORD2[1]){
		setTimeout(function(){
			bad.play();
			bad.currentTime = 0;
		}, 300);
	} // -------------------------------------------------------------------------------

	if (enter[2] == firstWORD2[2]){	
		firstWORD[2] = firstWORD2[2];
		setTimeout(function(){ 
			document.getElementsByClassName("Button3")[x].style.background = "darkred";
			document.getElementsByClassName("Button3")[x].innerHTML = firstWORD[2];
			good.play();
			good.currentTime = 0;
		}, 600);
	}
	else if (enter[2] != firstWORD2[2]){
		setTimeout(function(){ 
			bad.play();
			bad.currentTime = 0;
		}, 600);
	} // -------------------------------------------------------------------------------

	if (enter[3] == firstWORD2[3]){	
		firstWORD[3] = firstWORD2[3];
		setTimeout(function(){ 
			document.getElementsByClassName("Button4")[x].style.background = "darkred";
			document.getElementsByClassName("Button4")[x].innerHTML = firstWORD[3];
			good.play();
			good.currentTime = 0;
		}, 900);
	}
	else if (enter[3] != firstWORD2[3]){
		setTimeout(function(){
			bad.play();
			bad.currentTime = 0;
		}, 900);
	} // -------------------------------------------------------------------------------

	if (enter[4] == firstWORD2[4]){	
		firstWORD[4] = firstWORD2[4];
		setTimeout(function(){ 
			document.getElementsByClassName("Button5")[x].style.background = "darkred";
			document.getElementsByClassName("Button5")[x].innerHTML = firstWORD[4];
			good.play();
			good.currentTime = 0;
		}, 1200);
	}
	else if (enter[4] != firstWORD2[4]){
		setTimeout(function(){
			bad.play();
			bad.currentTime = 0;
		}, 1200);
	} // -------------------------------------------------------------------------------

	if (firstWORD == firstWORD2){
		alert("Goed geraden!");
	}
	else if(firstWORD != firstWORD2){
		setTimeout(function(){ 
		createWORD();
		}, 2000);
	}

	input.value = "";
}




document.getElementById('input').onkeydown = function(e){
	if(e.keyCode == 13){
		letterWORD();
	}
};


