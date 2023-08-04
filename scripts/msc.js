var podcastAudio = document.getElementById("podcast-audio");
var playBtn = document.getElementById("podcast-play");
var pauseBtn = document.getElementById("podcast-pause");

playBtn.addEventListener("click", () => {
    podcastAudio.play();
    playBtn.classList.add("display-none");
    pauseBtn.classList.remove("display-none");
});

pauseBtn.addEventListener("click", () => {
    podcastAudio.pause();
    pauseBtn.classList.add("display-none");
    playBtn.classList.remove("display-none");
});
