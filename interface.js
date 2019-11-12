function fullscreen(){
	if (document.body.requestFullscreen) {
		document.body.requestFullscreen();
	} else if (document.body.mozRequestFullScreen) { /* Firefox */
		document.body.mozRequestFullScreen();
	} else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
		document.body.webkitRequestFullscreen();
	} else if (document.body.msRequestFullscreen) { /* IE/Edge */
		document.body.msRequestFullscreen();
	}
	main.style.opacity = "0";
	setTimeout(function(){ 
		main.style.opacity = "1";
	}, 2500);
}
function mute(){
	bgmusic.pause();
	mute.setAttribute('class', 'fas fa-volume-up');
}
function unmute(){
	bgmusic.pause();
	mute.setAttribute('class', 'fas fa-volume-mute');
	mute.setAttribute('onclick', 'unmute()');
}
function openMENU(){
	menu.style.width = "200px";
	openbtn.style.display = "none";
}
function closeMENU(){
	menu.style.width = "25px";
	

	setTimeout(function(){
		openbtn.style.display="block";
	} , 500);
}
