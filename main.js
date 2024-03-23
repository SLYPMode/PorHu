var video = document.getElementById('video');

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function makeBig() {
  video.width = 640
  video.height = 480;
}

function makeSmall() {
  video.width = 360
  video.height = 240;
}

