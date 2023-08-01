var podcastAudio = document.getElementById('podcast-audio');
var playBtn = document.getElementById('podcast-play');
var pauseBtn = document.getElementById('podcast-pause');

// Play audio & mostra pause btn
var playShow = function() {
  podcastAudio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};

// Pause audio & mostra play btn
var pauseShow = function() {
  podcastAudio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};