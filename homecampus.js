//Variable Declarations
let homeicon=document.getElementById("homeicon");
let campusicon=document.getElementById("campusicon");
let video=document.getElementById("vid");
let close=document.getElementById("close");
let campusbg=document.getElementById("campusbg");
let campusscreen=document.getElementById("campusscreen");
let question=document.getElementById("question");


homeicon.addEventListener('mouseover', () => {
	homeicon.src="colored home.png";
})

homeicon.addEventListener('mouseout', () => {
	homeicon.src="black and white home.png";
})

campusicon.addEventListener('mouseover', () => {
	//campusicon.style.opacity="0";
	campusicon.src="campus colored.png";
	
	campusicon.style.width="20%";
	campusscreen.style.justifyContent="flex-start";
	campusscreen.style.alignItems="flex-end";
	
	campusbg.style.visibility="visible";
	campusbg.play();
})


campusbg.addEventListener('mouseout', () => {
	//campusicon.style.opacity="100%";
	
	
	campusicon.src="campus black and white.png";
	campusicon.style.width="35%";
	campusscreen.style.justifyContent="center";
	campusscreen.style.alignItems="center";
	
	campusbg.style.visibility="hidden";
	campusbg.pause();
})


/*
campusicon.addEventListener('mouseout', () => {

	campusicon.src="campus black and white.png";
	campusbg.style.visibility="hidden";
	campusbg.pause();
})
*/


//Icon Click Events
homeicon.addEventListener('click', () => {
	//selects video source and plays it
	video.src="Khola_whyedit.mp4";
	video.style.display="block";
	video.play();
	close.style.display="block";
	
	//hides icons and question while video plays
	homeicon.style.display="none";
	campusicon.style.display="none";
	question.style.visibility="hidden";
});

campusicon.addEventListener('click', () => {
	
	video.src="Khola_whyedit.mp4";
	video.style.display="block";
	video.play();
	close.style.display="block";
	
	homeicon.style.display="none";
	campusicon.style.display="none";
	question.style.visibility="hidden";
	
	//pauses and hides background video once icon clicked (MIGHT REMOVE THIS)
	campusbg.style.visibility="hidden";
	campusbg.pause();
	
});

//Close Video-Restore Original Page Look
close.addEventListener('click', () => {
	//closes video window and pauses it
	video.pause();
	close.style.display="none";
	video.style.display="none";

	//displays icons and question
	homeicon.style.display="block";
	campusicon.style.display="block";
	question.style.visibility="visible";

	//(MIGHT REMOVE THIS)
	campusicon.src="campus black and white.png";
	campusicon.style.width="35%";
	campusscreen.style.justifyContent="center";
	campusscreen.style.alignItems="center";
})