//VARIABLE DECLARATIONS
let homeicon=document.getElementById("homeicon");
let campusicon=document.getElementById("campusicon");
let campusbg=document.getElementById("campusbg");
let homebg=document.getElementById("homebg");
let question=document.getElementById("question");
let video=document.getElementById("vid");
let video2=document.getElementById("vid2");
let close=document.getElementById("close");



//START PAGE INTERACTIVITY

//Icon Hocer Events
//hover on icon makes icon colored, makes trailer visible and plays it on loop
homeicon.addEventListener('mouseover', () => {
	homeicon.src="./images/colored home.png";
	homebg.style.visibility="visible";
	homebg.play();
})
//mouse moves away from icon then icon goes back to black and white, trailer paused and hidden
homeicon.addEventListener('mouseout', () => {
	homeicon.src="./images/black and white home.png";
	homebg.style.visibility="hidden";
	homebg.pause();
})

//same interactivity as homeicon
campusicon.addEventListener('mouseover', () => {
	campusicon.src="./images/campus colored.png";
	campusbg.style.visibility="visible";
	campusbg.play();
})
campusicon.addEventListener('mouseout', () => {
	campusicon.src="./images/campus black and white.png";
	campusbg.style.visibility="hidden";
	campusbg.pause();
})


//Icon Click Events
//clicking on home icon
homeicon.addEventListener('click', () => {
	//shows associated video and the close button
	video.style.display="block";
	close.style.display="block";
	
	//hides icons and question while video plays
	homeicon.style.display="none";
	campusicon.style.display="none";
	question.style.visibility="hidden";
});
//same coded interactivity as click on home icon
campusicon.addEventListener('click', () => {
	video2.style.display="block";
	close.style.display="block";
	
	homeicon.style.display="none";
	campusicon.style.display="none";
	question.style.visibility="hidden";
});


//Close Button Click
close.addEventListener('click', () => {
	//refreshes the page to make sure video stops playing
	//returns to original page look
	window.location.reload();


})