let homeicon=document.getElementById("homeicon");
let campusicon=document.getElementById("campusicon");
let video=document.getElementById("vid");
let close=document.getElementById("close");

homeicon.addEventListener('click', () => {
	video.src="Khola_whyedit.mp4";
	video.style.display="block";
	close.style.display="block";
	video.play();
	homeicon.style.display="none";
	campusicon.style.display="none";
});

campusicon.addEventListener('click', () => {
	video.src="Khola_whyedit.mp4";
	video.style.display="block";
	close.style.display="block";
	video.play();
	homeicon.style.display="none";
	campusicon.style.display="none";
});

close.addEventListener('click', () => {
	video.pause();
	close.style.display="none";
	video.style.display="none";
	homeicon.style.display="block";
	campusicon.style.display="block";
})