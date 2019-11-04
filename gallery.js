var class_img = document.getElementsByClassName("img");
function getFullscreen(){
    if(this.requestFullscreen) {
        this.requestFullscreen();
      } else if(this.mozRequestFullScreen) {
        this.mozRequestFullScreen();
      } else if(this.webkitRequestFullscreen) {
        this.webkitRequestFullscreen();
      } else if(this.msRequestFullscreen) {
        this.msRequestFullscreen();
      }
} 
for (var i = 0; i < class_img.length; i++) {
    class_img[i].addEventListener('click', getFullscreen, false);
}
