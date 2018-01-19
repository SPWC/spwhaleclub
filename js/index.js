var bg = document.querySelector('.background-image');
var windowWidth = window.innerWidth / 2;
var windowHeight = window.innerHeight / 2;

bg.addEventListener('mousemove', function (e) {
  var mouseX = e.clientX / windowWidth;
  var mouseY = e.clientY / windowHeight;

  bg.style.transform = 'translate3d(-' + mouseX + '%, -' + mouseY + '%, 0)';
});