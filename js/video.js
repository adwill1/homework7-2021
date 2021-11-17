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

var slow_count = 0.95;
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower");
	video.playbackRate = slow_count;
	console.log(slow_count);
	slow_count = 0.95*slow_count;
	return slow_count;
})

var fast_count = slow_count;
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster");
	fast_count = 1.05*slow_count;
	video.playbackRate = fast_count;
	fast_count = 1.05*fast_count;
	console.log(fast_count);
})

var time = 0 + 15;
document.querySelector("#skip").addEventListener("click", function() {
	if (time == 75){
		time = 0;
		console.log(time);
	}else{
		console.log("Time");
		video.currentTime = time;
		console.log(time);
		time = time + 15;
	}
	// console.log("Time");
	// video.currentTime = time;
	// time = time + 15;
	// console.log(video.currentTime);
	// if (video.currentTime == 90){
	// 	video.currentTime = 0
	// 	console.log(video.currentTime)
	// }
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