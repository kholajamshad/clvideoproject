/*buttons dont work yet*/
/*no video currently added to page*/
// Get the video
let video = document.getElementById("myVideo");

// Get the button
let pbtn = document.getElementById("pauseBtn");

// Pause and play the video, and change the button text
pbtn.addEventListerner("click" , () => {
  if (video.paused) {
  	log.console("here");
    video.play();
    pbtn.innerHTML = "Pause";
  } else {
  	log.console("here");
    video.pause();

    pbtn.innerHTML = "Play";
  }
});