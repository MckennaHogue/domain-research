
var xPos= 200;
var yPos= 400;
var fishCount=0;

for(var fc = 0;  fc<10; fc++){
  drawFish(Math.random()*800);
}
function drawFish(xPosition){
  fishCount++;
  // var fishxPos= Math.random()*800;
  var fishyPos= 200+Math.random()*450;
  $("#game").append ('<img src="assets/fish1.gif" alt="fish" id="fish'+fishCount+'" class="fish">');
  $("#fish"+fishCount).css({  "top":fishyPos+"px", "left": xPosition+ "px"});
  swimleft("#fish"+fishCount, xPosition);

}

setInterval( function(){
  drawFish(0);
  }, Math.random() *10000);


function swimleft(fish, fishPos){
  for(var x=0; x<1000; x++){
    fishPos+=10;
    $(fish).animate({"left": fishPos+"px"})
  }
}

$(document).keydown(function(e) {
  switch(e.which){
    case 37://left
    console.log("left")
    xPos-=10;
    //xpos=xpos-10
    break;

    case 38://up
    yPos-=10;
    console.log("up")

    break;

    case 39: //right
     xPos+=10;
    //xpos=xpos+10
    console.log("right")

    break;

    case 40: //down
    yPos+=10;
    console.log("down")

    break;

    default: return;
  }
  e.preventDefault();

  console.log("xPos:"+xPos+"  yPos:" + yPos);
  $("#diver").css({  "top":yPos+"px", "left": xPos+ "px"});
});