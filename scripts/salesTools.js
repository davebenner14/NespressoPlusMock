document.addEventListener("DOMContentLoaded", () => {
  fetch("salesTools.html")
    .then((response) => response.text())
    .then((data) => {
      const salesToolsPlaceholder = document.getElementById(
        "sales-tools-placeholder"
      );
      salesToolsPlaceholder.innerHTML = data;
    });
});

var players = [];

function onYouTubeIframeAPIReady() {
  var allVideos = document.querySelectorAll(".video-link iframe");

  allVideos.forEach(function (vid, index) {
    var player = new YT.Player(vid, {
      events: {
        onStateChange: onPlayerStateChange,
      },
    });
    players.push(player);
  });
}

function onPlayerStateChange(event) {
  var videoContainer = event.target.getIframe().closest(".video-link");
  var description = videoContainer.querySelector(".video-description");

  // YT.PlayerState.PLAYING == 1
  if (event.data == YT.PlayerState.PLAYING) {
    description.style.opacity = "0";
  } else {
    description.style.opacity = "1";
  }
}
