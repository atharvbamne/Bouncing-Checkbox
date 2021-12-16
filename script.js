gsap.registerPlugin(CustomEase, CustomBounce);


//bounceLeft 
CustomBounce.create("myBounceLeft", {
  strength: 0.6,
  squash: 3,
  squashID: "myBounceLeft-squash",
  transformOrigin: "left center"
});

const bMoveLeft = gsap.from("#ball", { duration: 2, x: 220, ease: "myBounceLeft" });

const bSquashLeft = gsap.to("#ball", {
  duration: 2,
  scaleY: 1.2,
  scaleX: 0.8,
  //borderRadius: "50% 0 0 50%",
  ease: "myBounceLeft-squash",
  transformOrigin: "left center" 
});


//bounceRight
CustomBounce.create("myBounceRight", {
  strength: 0.6,
  squash: 3,
  squashID: "myBounceRight-squash",
  transformOrigin: "right center"
});

const bMoveRight = gsap.from("#ball", { duration: 2, x: 0, ease: "myBounceRight" });

const bSquashRight = gsap.to("#ball", {
  duration: 2,
  scaleY: 1.2, //1.4
  scaleX: 0.8, //0.6
  ease: "myBounceRight-squash",
  transformOrigin: "right center" 
});

var track  = document.querySelector('.track');
var ball = document.getElementById('ball');

ball.addEventListener("click", function(){
  ball.classList.toggle('checked');
  track.classList.toggle('checked');
  if(ball.classList.contains('checked')){
    bMoveRight.restart();
    bSquashRight.restart();
  } else {
    bMoveLeft.restart();
    bSquashLeft.restart(); 
  }
});