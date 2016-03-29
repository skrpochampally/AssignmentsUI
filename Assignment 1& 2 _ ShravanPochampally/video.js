var video= document.getElementbyid("demo")

function playVideo() 
{
	video.play();
}

function pauseVideo() 
{
	video.pause();
}

function skipVideo(value) 
{
	video.currentTime += value;
}

}
function replayVideo() 
{
	video.currentTime = 0;
}

function mute() {
	video.volume = 0;
}

