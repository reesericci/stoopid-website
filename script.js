var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
function autoPlayYouTubeModal(){
      var theModal = $('#videoModal'),
      videoSRC = "https://rickroll69.netlify.app/rickroll.mp4",
      videoSRCauto = videoSRC+"?autoplay=1&controls=0" ;
      $("#modal-iframe").attr('src', videoSRCauto);
      $("#modal-close").click(function () {
          $("#modal-iframe").attr('src', videoSRC);
      });     
}

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
    videoModal.show()
    autoPlayYouTubeModal();
  });
  
