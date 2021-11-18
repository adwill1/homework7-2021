var video = document.querySelector('#player1')

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = (video.volume *100) + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower");
	video.playbackRate = video.playbackRate * 0.95;
	console.log(video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster");
	video.playbackRate = video.playbackRate / 0.95;
	console.log(video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 15){
		video.currentTime += 15;
	}else{
		video.currentTime = 0;
	}
	console.log(video.currentTime);
})


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted == true){
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
})

document.querySelector("#slider").addEventListener("click", function() {
	console.log(video.volume);
	video.volume = this.value / 100;
	volume.innerHTML = (video.volume *100) + '%';
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})