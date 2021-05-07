var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
function autoPlayYouTubeModal(){
      var theModal = $('#videoModal'),
      videoSRC = "https://peervideo.club/videos/embed/f0cd16c8-dbc2-4774-a97f-b5507c3c68a0?loop=1&autoplay=1&title=0&warningTitle=0&controls=0&peertubeLink=0",
      videoSRCauto = videoSRC+"?autoplay=1" ;
      $("#modal-iframe").attr('src', videoSRCauto);
      $("#modal-close").click(function () {
          $("#modal-iframe").attr('src', videoSRC);
      });     
}

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
    videoModal.show()
    autoPlayYouTubeModal();
  });
  