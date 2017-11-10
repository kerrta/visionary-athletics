var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M4Xrh8OP1Jk'
  });
}

$(document).on('mouseover', '#player', function() {
  player.playVideo();
});
$(document).on('mouseout', '#player', function() {
  player.pauseVideo();
});