const min = 1; 
const max = 479; 
var random = randomWORD();

var roundCOUNT = 0;
var bgindex = 0;
var scoreONE = 0;
var scoreTWO = 0;

var good = new Audio("music/good.mp3");
var bad = new Audio("music/bad.mp3");
var click = new Audio("music/buttonclick.mp3")
var bgmusic = new Audio("music/bgmusic.mp3");
var applause = new Audio("music/applause.mp3");
var aww = new Audio("music/aww.mp3");
bgmusic.loop = true;

function screenMAX(){
	click.play();

	if (document.body.requestFullscreen) {
		document.body.requestFullscreen();
	} else if (document.body.mozRequestFullScreen) { /* Firefox */
		document.body.mozRequestFullScreen();
	} else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
		document.body.webkitRequestFullscreen();
	} else if (document.body.msRequestFullscreen) { /* IE/Edge */
		document.body.msRequestFullscreen();
	}
}

function offSOUND(){
	click.play();
	bgmusic.pause();
	mute.setAttribute('class', 'fas fa-volume-up');
	mute.setAttribute('onclick', 'onSOUND()');
}

function onSOUND(){
	click.play();
	bgmusic.play();
	mute.setAttribute('class', 'fas fa-volume-mute');
	mute.setAttribute('onclick', 'offSOUND()');
}

function openMENU(){
	click.play();
	menu.style.width = "200px";
	openbtn.style.display = "none";
}

function closeMENU(){
	click.play();
	menu.style.width = "25px";
	

	setTimeout(function(){
		openbtn.style.display="block";
	} , 500);
}

function randomWORD(){
	random = Math.floor(Math.random() * (+max - +min)) + +min;
	word2 = words[random].toUpperCase();
	word = words[random][0].toUpperCase() + "....";
	firstWORD2 = word2.split('');
	firstWORD = word.split('');
	return random;
} 

function txtEMPTY(){
	txt.innerHTML = "";
}
function txtscreen(){
	txt.innerHTML = "Fullscreen";
}
function txtmute(){
	txt.innerHTML = "Mute Music";
}
function txtmenuopen(){
	txt.innerHTML = "Open Menu";
}
function txtmenuclose(){
	txt.innerHTML = "Close Menu";
}





var word2 = words[random].toUpperCase();
var firstWORD2 = word2.split('');
firstWORD2.join('');
var word = firstWORD2[0] + "...."
var firstWORD = word.split('');
firstWORD.join('');


var form = document.createElement("FORM");
form.style.textAlign = "center";
form.style.margin = "0 auto";
form.style.display = "block";
form.style.width = "353px";
form.style.height = "87px";
form.setAttribute('action', 'javascript:void(0);');						// Input Form
// ----------------------------------------------------------------------------------

var input = document.createElement('INPUT');
input.type = "TEXT";
input.name = "word";
input.style.margin = "0 auto";
input.style.width = "345px";
input.style.height = "80px";
input.style.outline = "0";
input.style.borderRadius = "25px";
input.style.fontSize = "65px";
input.style.background = "transparent";
input.style.color = "white";
input.style.textAlign = "center";
input.style.textTransform = "uppercase";
input.style.display = "block";
input.id = "forminput";
input.setAttribute('autocomplete', 'off');							// Input Form
// ------------------------------------------------------------------------------

var inputbox = document.getElementById("input");

var btn = document.createElement("BUTTON");
btn.setAttribute('id', 'startBTN');
btn.innerHTML = "START";
btn.setAttribute('onclick', 'start()');
btn.style.background = "transparent";
btn.style.width = "300px";
btn.style.height = "70px";
btn.style.color = "white";
btn.style.borderRadius = "10px";
btn.style.fontSize = "40px";
btn.style.transition = "all 0.3s ease-out";
btn.style.opacity = "1";
btn.style.margin = "185px auto";
btn.style.display = "block";										// Start Button
// --------------------------------------------------------------------------------

var playbord = document.getElementById("playbord");
var main = document.getElementById("main");
main.style.position = "relative";
main.style.opacity = "1";
document.getElementById('main').style.backgroundImage = "img/title.png";
playbord.appendChild(btn);												// Playbord
// --------------------------------------------------------------------------------


var fullscreen = document.createElement("I");
fullscreen.setAttribute('class', 'fas fa-expand');
fullscreen.setAttribute('onclick', 'screenMAX()');
fullscreen.setAttribute('onmouseover', 'txtscreen()');
fullscreen.setAttribute('onmouseout', 'txtEMPTY()');
fullscreen.style.color = "white";
fullscreen.style.fontSize = "30px";
fullscreen.style.float = "left";
fullscreen.style.display = "inline";
fullscreen.style.marginLeft = "5px";
fullscreen.style.lineHeight = "50px";
fullscreen.style.cursor = "pointer";

var txt = document.createElement("P");
var txtnode = document.createTextNode("");
txt.appendChild(txtnode);
txt.style.color = "white";
txt.style.position = "absolute";
txt.style.top = "5%";
txt.style.fontSize = "30px";
txt.style.textAlign = "left";
txt.style.width = "300px";

var mute = document.createElement("I");
mute.setAttribute('class', 'fas fa-volume-mute');
mute.setAttribute('onclick', 'offSOUND()');
mute.setAttribute('onmouseover', 'txtmute()');
mute.setAttribute('onmouseout', 'txtEMPTY()');
mute.style.color = "white";
mute.style.float = "left";
mute.style.display = "inline";
mute.style.fontSize = "30px";
mute.style.marginLeft = "25px";
mute.style.lineHeight = "50px";
mute.style.cursor = "pointer";


var closebtn = document.createElement("I");
closebtn.setAttribute('class', 'fas fa-caret-left');
closebtn.setAttribute('onclick', 'closeMENU()');
closebtn.setAttribute('onmouseover', 'txtmenuclose()');
closebtn.setAttribute('onmouseout', 'txtEMPTY()');
closebtn.style.color = "white";
closebtn.style.fontSize = "30px"
closebtn.style.lineHeight = "50px";
closebtn.style.marginLeft = "95px";


var openbtn = document.createElement("I");
openbtn.setAttribute('class', 'fas fa-caret-right');
openbtn.setAttribute('onclick', 'openMENU()');
openbtn.setAttribute('onmouseover', 'txtmenuopen()');
openbtn.setAttribute('onmouseout', 'txtEMPTY()');
openbtn.style.color = "white";
openbtn.style.fontSize = "30px"
openbtn.style.lineHeight = "50px";
openbtn.style.marginLeft = "5px";

var popup = document.createElement("DIV");
popup.style.width = "500px";
popup.style.height = "300px";
popup.style.background = "rgba(0, 0, 0, 0.5)";
popup.style.display = "block";
popup.style.margin = "0 auto";
popup.style.position = "absolute";
popup.style.left = "33%";
popup.style.display = "none";

var scoreLEFT = document.createElement("DIV");
scoreLEFT.style.width = "125px";
scoreLEFT.style.height = "80px";
scoreLEFT.style.background = "transparent";
scoreLEFT.style.color = "white";
scoreLEFT.style.lineHeight = "80px";
scoreLEFT.style.textAlign = "center";
scoreLEFT.setAttribute('id', 'scoreLEFT');
scoreLEFT.style.fontSize = "95px";
scoreLEFT.style.position = "absolute";
scoreLEFT.style.top = "40%";
scoreLEFT.style.left = "23%";
scoreLEFT.style.display = "none";
scoreLEFT.innerHTML = scoreONE;

var scoreRIGHT = document.createElement("DIV");
scoreRIGHT.style.width = "125px";
scoreRIGHT.style.height = "80px";
scoreRIGHT.style.background = "transparent";
scoreRIGHT.style.color = "white";
scoreRIGHT.style.lineHeight = "80px";
scoreRIGHT.style.textAlign = "center";
scoreRIGHT.setAttribute('id', 'scoreRIGHT');
scoreRIGHT.style.fontSize = "95px";
scoreRIGHT.style.position = "absolute";
scoreRIGHT.style.top = "40%";
scoreRIGHT.style.left = "69%";
scoreRIGHT.style.display = "none";
scoreRIGHT.innerHTML = scoreTWO;

var resultimg = document.createElement("IMG");
resultimg.style.width = "500px";
resultimg.style.height = "300px";
resultimg.setAttribute('src', 'img/goedleft.png');
popup.appendChild(resultimg);
main.prepend(popup);
main.appendChild(txt);
main.appendChild(scoreLEFT);
main.appendChild(scoreRIGHT);

var menu = document.createElement("DIV");
menu.style.width = "25px"
menu.style.height = "50px"
menu.style.background = "rgb(8, 46, 61)";
menu.style.border = "2px solid orange"
menu.style.position = "absolute"
menu.style.top = "30px";
menu.style.transition = "all 0.5s ease-out";
menu.style.overflowX = "hidden";
menu.style.overflowY = "hidden";

var timeline = document.createElement("div");
timeline.setAttribute('id', 'timeline');
timeline.style.width = "345px";
timeline.style.height = "5px";
timeline.style.display = "block";
timeline.style.position = "absolute";
timeline.style.top = "62%";
timeline.style.left = "38%";
timeline.style.animationName = "timer";
timeline.style.animationDuration = "30s";
timeline.style.animationTimingFunction = "linear";
timeline.style.animationPlayState = "running";
timeline.addEventListener("animationend", timesUP);

menu.appendChild(openbtn);
menu.appendChild(fullscreen);
menu.appendChild(mute);
menu.appendChild(closebtn);
main.appendChild(menu);


function timesUP(){
	if (bgindex == 0){
		bgindex = 1;
		aww.play();
		main.style.backgroundImage = "url(img/bgright.png)";
		resultimg.setAttribute('src', 'img/tijdlinks.png');
		popup.style.display = "block";

		setTimeout(function(){
			main.appendChild(timeline);
			popup.style.display = "none";
		}, 2000);
	}
	else if(bgindex == 1){
		bgindex = 0;
		aww.play();
		main.style.backgroundImage = "url(img/bgleft.png)";
		resultimg.setAttribute('src', 'img/tijdrechts.png');
		popup.style.display = "block";

		setTimeout(function(){
			main.appendChild(timeline);
			popup.style.display = "none";
		}, 2000);
	}
}

function start(){
	click.play();
	main.style.opacity = "0";
	btn.style.display = "none";
	bgmusic.play();
	setTimeout(function(){ 
		document.getElementById("main").style.backgroundImage = "url(img/bgleft.png)"
		main.style.opacity = "1"; 
		scoreLEFT.style.display = "block";
		scoreRIGHT.style.display = "block";
		form.appendChild(input);
		inputbox.appendChild(form);
		createWORD();
		main.appendChild(timeline);
	}, 2000);
}

function createWORD(){
	for (i=1;i<6;i++){
		var para = document.createElement("p"); 
		para.setAttribute('class','Button' + i);
		para.style.color = "white";
		para.style.border = "1px solid white"
		var node = document.createTextNode(firstWORD[i-1]);

		if (firstWORD[i-1] == firstWORD2[i-1]){
			para.style.background = "darkgreen";
		}

		para.appendChild(node);
		var playbord = document.getElementById("playbord");
		playbord.appendChild(para);
		input.value = "";
	}
}

var x = -1;

function letterWORD(){
	click.play();
	x++;
	var enter = input.value.toUpperCase();
	enter.split('');


	// -------------------------------------------------------------------------------
	var checkONE = firstWORD2.includes(enter[0]);
		if (checkONE == true){
			setTimeout(function(){
				document.getElementsByClassName("Button1")[x].innerHTML = enter[0];
				document.getElementsByClassName("Button1")[x].style.background = "orange";
				bad.play();
				bad.currentTime = 0;
			}, 0);
		}
		else if(checkONE == false){
			setTimeout(function(){
				document.getElementsByClassName("Button1")[x].innerHTML = enter[0];
				document.getElementsByClassName("Button1")[x].style.background = "darkred";
				bad.play();
				bad.currentTime = 0;
			}, 0);
		}
		if (enter[0] == firstWORD2[0]){	
			firstWORD[0] = firstWORD2[0];
			setTimeout(function(){ 
				document.getElementsByClassName("Button1")[x].style.background = "darkgreen";
				document.getElementsByClassName("Button1")[x].innerHTML = firstWORD[0];
				good.play();
				good.currentTime = 0;
			}, 0);
		}
	// -------------------------------------------------------------------------------
	var checkONE = firstWORD2.includes(enter[1]);
		if (checkONE == true){
			if (firstWORD[0] == enter[1]){
				setTimeout(function(){
					document.getElementsByClassName("Button2")[x].innerHTML = enter[1];
					document.getElementsByClassName("Button2")[x].style.background = "darkred";
					bad.play();
					bad.currentTime = 0;
				}, 300);
			}
			else{
				setTimeout(function(){
					document.getElementsByClassName("Button2")[x].innerHTML = enter[1];
					document.getElementsByClassName("Button2")[x].style.background = "orange";
					bad.play();
					bad.currentTime = 0;
				}, 300);
			}
		}
		else if(checkONE == false){
			setTimeout(function(){
				document.getElementsByClassName("Button2")[x].innerHTML = enter[1];
				document.getElementsByClassName("Button2")[x].style.background = "darkred";
				bad.play();
				bad.currentTime = 0;
			}, 300);
		}
		if (enter[1] == firstWORD2[1]){	
			firstWORD[1] = firstWORD2[1];
			setTimeout(function(){ 
				document.getElementsByClassName("Button2")[x].style.background = "darkgreen";
				document.getElementsByClassName("Button2")[x].innerHTML = firstWORD[1];
				good.play();
				good.currentTime = 0;
			}, 300);
		}
	// -------------------------------------------------------------------------------
	var checkONE = firstWORD2.includes(enter[2]);
		if (checkONE == true){
			if (firstWORD[0] == enter[2]){
				setTimeout(function(){
					document.getElementsByClassName("Button3")[x].innerHTML = enter[2];
					document.getElementsByClassName("Button3")[x].style.background = "darkred";
					bad.play();
					bad.currentTime = 0;
				}, 600);
			}
			else{
				setTimeout(function(){
					document.getElementsByClassName("Button3")[x].innerHTML = enter[2];
					document.getElementsByClassName("Button3")[x].style.background = "orange";
					bad.play();
					bad.currentTime = 0;
				}, 600);
			}
		}
		else if(checkONE == false){
			setTimeout(function(){
				document.getElementsByClassName("Button3")[x].innerHTML = enter[2];
				document.getElementsByClassName("Button3")[x].style.background = "darkred";
				bad.play();
				bad.currentTime = 0;
			}, 600);
		}
		if (enter[2] == firstWORD2[2]){	
			firstWORD[2] = firstWORD2[2];
			setTimeout(function(){ 
				document.getElementsByClassName("Button3")[x].style.background = "darkgreen";
				document.getElementsByClassName("Button3")[x].innerHTML = firstWORD[2];
				good.play();
				good.currentTime = 0;
				
			}, 600);
		}
	// -------------------------------------------------------------------------------
	var checkONE = firstWORD2.includes(enter[3]);
		if (checkONE == true){
			if (firstWORD[0] == enter[3]){
				setTimeout(function(){
					document.getElementsByClassName("Button4")[x].innerHTML = enter[3];
					document.getElementsByClassName("Button4")[x].style.background = "darkred";
					bad.play();
					bad.currentTime = 0;
				}, 900);
			}
			else{
				setTimeout(function(){
					document.getElementsByClassName("Button4")[x].innerHTML = enter[3];
					document.getElementsByClassName("Button4")[x].style.background = "orange";
					bad.play();
					bad.currentTime = 0;
				}, 900);
			}
		}
		else if(checkONE == false){
			setTimeout(function(){
				document.getElementsByClassName("Button4")[x].innerHTML = enter[3];
				document.getElementsByClassName("Button4")[x].style.background = "darkred";
				bad.play();
				bad.currentTime = 0;
			}, 900);
		}
		if (enter[3] == firstWORD2[3]){	
			firstWORD[3] = firstWORD2[3];
			setTimeout(function(){ 
				document.getElementsByClassName("Button4")[x].style.background = "darkgreen";
				document.getElementsByClassName("Button4")[x].innerHTML = firstWORD[3];
				good.play();
				good.currentTime = 0;

			}, 900);
		}
	// -------------------------------------------------------------------------------
	var checkONE = firstWORD2.includes(enter[4]);
		if (checkONE == true){
			if (firstWORD[0] == enter[4]){
				setTimeout(function(){
					document.getElementsByClassName("Button5")[x].innerHTML = enter[4];
					document.getElementsByClassName("Button5")[x].style.background = "darkred";
					bad.play();
					bad.currentTime = 0;
				}, 1200);
			}
			else{
				setTimeout(function(){
					document.getElementsByClassName("Button5")[x].innerHTML = enter[4];
					document.getElementsByClassName("Button5")[x].style.background = "orange";
					bad.play();
					bad.currentTime = 0;
				}, 1200);
			}
		}
		else if(checkONE == false){
			setTimeout(function(){
				document.getElementsByClassName("Button5")[x].innerHTML = enter[4];
				document.getElementsByClassName("Button5")[x].style.background = "darkred";
				bad.play();
				bad.currentTime = 0;
			}, 1200);
		}
		if (enter[4] == firstWORD2[4]){	
			firstWORD[4] = firstWORD2[4];
			setTimeout(function(){ 
				document.getElementsByClassName("Button5")[x].style.background = "darkgreen";
				document.getElementsByClassName("Button5")[x].innerHTML = firstWORD[4];
				good.play();
				good.currentTime = 0;
			}, 1200);
		}
	// -------------------------------------------------------------------------------

	result(enter);

	if (result() == true && bgindex == 0){
		timeline.style.animationPlayState = "paused";
		
		setTimeout(function(){
			main.removeChild(timeline);
			applause.play();
			scoreONE = +scoreONE + 1;
			scoreLEFT.innerHTML = scoreONE;
			resultimg.setAttribute('src', 'img/goedleft.png');
			popup.style.display = "block";
			roundCOUNT = 0;
			randomWORD();
			removeWORDS();
			createWORD();
			x=-1;

		}, 2000);
		setTimeout(function(){
			main.appendChild(timeline);
			timeline.style.animationPlayState = "running";
			popup.style.display = "none";
		}, 4000);
	}
	else if (result() == true && bgindex == 1){
		timeline.style.animationPlayState = "paused";
		
		setTimeout(function(){
			main.removeChild(timeline);
			applause.play();
			scoreTWO = +scoreTWO + 1;
			scoreRIGHT.innerHTML = scoreTWO;
			resultimg.setAttribute('src', 'img/goedright.png');
			popup.style.display = "block";
			roundCOUNT = 0;
			randomWORD();
			removeWORDS();
			createWORD();
			x=-1;

		}, 2000);
		setTimeout(function(){
			main.appendChild(timeline);
			timeline.style.animationPlayState = "running";
			popup.style.display = "none";
		}, 4000);
	}
	else if (result() == false){
		if (roundCOUNT < 5){
			setTimeout(function(){
				createWORD();
			}, 2000);
		}
		else if(roundCOUNT == 5 && bgindex == 0){
			bgindex = 1;
			roundCOUNT = 0;
			timeline.style.animationPlayState = "paused";
			setTimeout(function(){
				main.removeChild(timeline);
				aww.play();
				x = -1;
				main.style.backgroundImage = "url(img/bgright.png)";
				resultimg.setAttribute('src', 'img/foutleft.png');
				popup.style.display = "block";
				randomWORD();
				removeWORDS();
				createWORD();

			}, 2000);

			setTimeout(function(){
				main.appendChild(timeline);
				timeline.style.animationPlayState = "running";
				popup.style.display = "none";
			}, 4000);
		}
		else if(roundCOUNT == 5 && bgindex == 1){
			bgindex = 0;
			roundCOUNT = 0;
			timeline.style.animationPlayState = "paused";
			setTimeout(function(){
				main.removeChild(timeline);
				aww.play();
				x = -1;
				main.style.backgroundImage = "url(img/bgleft.png)";
				resultimg.setAttribute('src', 'img/foutright.png');
				popup.style.display = "block";
				randomWORD();
				removeWORDS();
				createWORD();
			}, 2000);

			setTimeout(function(){
				main.appendChild(timeline);
				timeline.style.animationPlayState = "running";
				popup.style.display = "none";
			}, 4000);
		}
	}
	input.value = "";
} 

function result(enter){
	

	if (JSON.stringify(firstWORD)==JSON.stringify(firstWORD2)){
		return true;
	}
	if (JSON.stringify(firstWORD)!=JSON.stringify(firstWORD2)){
		return false;
	}
} 

function removeWORDS(){
	const playbord = document.getElementById("playbord");
	while (playbord.firstChild) {
		playbord.removeChild(playbord.firstChild);
	}
	console.log(firstWORD2);
}

document.getElementById('input').onkeydown = function(e){
	
	if(e.keyCode == 13){
		roundCOUNT += 1;
		console.log(roundCOUNT);
		letterWORD();

	}
};


