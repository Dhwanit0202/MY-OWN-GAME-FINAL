var gamebg1img,gamebg2img,gamebg3img;
var skellyanimation;
var gokuanimation, gokustanding;
var gokuintro;
var Goku;
var vegitostanding,Vegito;
var lightAttack = 1, mediumAttack=2, Ultimate=3;
var gokula,gokuma,gokuu;
var vegitola,vegitoma,vegitou ;
var keyPressedFrame =0
var vegitoFrame= 0;
var GokuHealth = 400, VegitoHealth = 400;
var gokuattackState = 0, vegitoattackState = 0;
var gokuhc= "#0F7626",vegitohc = "#0F7626"
var gokuultimate= false , vegitoultimate = false;
var count = 0
var ultimateframe=0

function preload(){


gamebg1img=loadImage("images/gamebg1.jpg")
gamebg2img=loadImage("images/gamebg2.jpg")
gamebg3img=loadImage("images/gamebg3.jpg")
gokustanding=loadAnimation("images/gokulightattack/tile000.png")
vegitostanding=loadAnimation("images/vegitoattacking/tile002.png.png");
gokula=loadAnimation("images/gokulightattack/tile000.png",
"images/gokulightattack/tile001.png",
"images/gokulightattack/tile002.png",
"images/gokulightattack/tile003.png",
"images/gokulightattack/tile004.png",
"images/gokulightattack/tile005.png",
"images/gokulightattack/tile006.png",
"images/gokulightattack/tile007.png",
"images/gokulightattack/tile008.png",
"images/gokulightattack/tile009.png",
"images/gokulightattack/tile010.png",
"images/gokulightattack/tile011.png",
"images/gokulightattack/tile012.png",
"images/gokulightattack/tile013.png",
"images/gokulightattack/tile014.png",
"images/gokulightattack/tile015.png",
"images/gokulightattack/tile016.png",
"images/gokulightattack/tile017.png",
"images/gokulightattack/tile018.png",
"images/gokulightattack/tile019.png",
"images/gokulightattack/tile020.png",
"images/gokulightattack/tile021.png")

gokuma=loadAnimation(
  /*"images/gokumediumattack/tile000.png",
"images/gokumediumattack/tile001.png",
"images/gokumediumattack/tile002.png",
"images/gokumediumattack/tile003.png",
"images/gokumediumattack/tile004.png",
"images/gokumediumattack/tile005.png",
"images/gokumediumattack/tile006.png",
"images/gokumediumattack/tile007.png",
"images/gokumediumattack/tile008.png",
"images/gokumediumattack/tile009.png",
"images/gokumediumattack/tile010.png",
"images/gokumediumattack/tile011.png",
"images/gokumediumattack/tile012.png",
"images/gokumediumattack/tile013.png",
"images/gokumediumattack/tile014.png",
"images/gokumediumattack/tile015.png",
"images/gokumediumattack/tile016.png",
"images/gokumediumattack/tile017.png",
"images/gokumediumattack/tile018.png",
"images/gokumediumattack/tile019.png",
"images/gokumediumattack/tile020.png",
"images/gokumediumattack/tile021.png",
"images/gokumediumattack/tile022.png",*/
"images/gokumediumattack/tile023.png",
"images/gokumediumattack/tile024.png",
"images/gokumediumattack/tile025.png",
"images/gokumediumattack/tile026.png",
"images/gokumediumattack/tile027.png",
"images/gokumediumattack/tile028.png",
"images/gokumediumattack/tile029.png",
"images/gokumediumattack/tile030.png",
"images/gokumediumattack/tile031.png",
"images/gokumediumattack/tile032.png",
"images/gokumediumattack/tile033.png",
"images/gokumediumattack/tile034.png",
"images/gokumediumattack/tile035.png",
"images/gokumediumattack/tile036.png",
"images/gokumediumattack/tile037.png",
"images/gokumediumattack/tile038.png",
"images/gokumediumattack/tile039.png",)

vegitola=loadAnimation("images/vegitoattacking/tile000.png.png",
"images/vegitoattacking/tile001.png.png",
"images/vegitoattacking/tile002.png.png",
"images/vegitoattacking/tile003.png.png",
"images/vegitoattacking/tile004.png.png",
"images/vegitoattacking/tile005.png.png",
"images/vegitoattacking/tile006.png.png",
"images/vegitoattacking/tile007.png.png",
"images/vegitoattacking/tile008.png.png",
"images/vegitoattacking/tile009.png.png",
"images/vegitoattacking/tile010.png.png",)

vegitoma=loadAnimation("images/vegitoattacking2/tile000.png.png",
"images/vegitoattacking2/tile001.png.png",
"images/vegitoattacking2/tile002.png.png",
"images/vegitoattacking2/tile003.png.png",
"images/vegitoattacking2/tile004.png.png",
"images/vegitoattacking2/tile005.png.png",
"images/vegitoattacking2/tile006.png.png",
"images/vegitoattacking2/tile007.png.png",
"images/vegitoattacking2/tile008.png.png",
"images/vegitoattacking2/tile009.png.png",)

gokuu=loadAnimation("images/gokuultimate/tile000.png",
"images/gokuultimate/tile001.png",
"images/gokuultimate/tile002.png",
"images/gokuultimate/tile003.png",
"images/gokuultimate/tile004.png",
"images/gokuultimate/tile005.png",
"images/gokuultimate/tile006.png",
"images/gokuultimate/tile007.png",
"images/gokuultimate/tile008.png",
"images/gokuultimate/tile009.png",
"images/gokuultimate/tile010.png",
"images/gokuultimate/tile011.png",
"images/gokuultimate/tile012.png",
"images/gokuultimate/tile013.png",
"images/gokuultimate/tile014.png",
"images/gokuultimate/tile015.png",
"images/gokuultimate/tile016.png",
"images/gokuultimate/tile017.png",
"images/gokuultimate/tile018.png",
"images/gokuultimate/tile019.png",
"images/gokuultimate/tile020.png",
"images/gokuultimate/tile021.png",
"images/gokuultimate/tile022.png",
"images/gokuultimate/tile023.png",
"images/gokuultimate/tile024.png",
"images/gokuultimate/tile025.png",
"images/gokuultimate/tile026.png",
"images/gokuultimate/tile027.png",
"images/gokuultimate/tile028.png",
"images/gokuultimate/tile029.png",
"images/gokuultimate/tile030.png",
"images/gokuultimate/tile031.png",
"images/gokuultimate/tile032.png",
"images/gokuultimate/tile033.png",
"images/gokuultimate/tile034.png",
"images/gokuultimate/tile035.png",
"images/gokuultimate/tile036.png",
"images/gokuultimate/tile037.png",
"images/gokuultimate/tile038.png",
"images/gokuultimate/tile039.png",
"images/gokuultimate/tile040.png",
"images/gokuultimate/tile041.png",
"images/gokuultimate/tile042.png",
"images/gokuultimate/tile043.png",
"images/gokuultimate/tile044.png",
"images/gokuultimate/tile045.png",
"images/gokuultimate/tile046.png",)



}



function setup() {
  createCanvas(windowWidth,windowHeight);
  Goku = createSprite(windowWidth/4, windowHeight-120, 20, 40);
 Goku.addAnimation("gokustanding",gokustanding);
 Goku.addAnimation("gokula",gokula);
 Goku.addAnimation("gokuma",gokuma);
 Goku.addAnimation("gokuu",gokuu);
  Goku.scale = 3

  Vegito=createSprite(windowWidth-400,windowHeight-100,20,40);
  Vegito.addAnimation("vegitostanding",vegitostanding);
  Vegito.addAnimation("vegitola",vegitola);
  Vegito.addAnimation("vegitoma",vegitoma);
  Vegito.scale =2

  Goku.debug = true
  Vegito.debug = true

  Goku.setCollider("rectangle",0,0,30,70);
  Vegito.setCollider("rectangle",0,0,60,70)
  
}

function draw() {
  background(gamebg1img);  
  Vegito.attractionPoint(0.1,Goku.x,Goku.y)
  Vegito.maxSpeed=2;
  GokuAttack();
  VegitoAttack();
  if(GokuHealth<200 && count === 0){
    gokuultimate=true
    count = count + 1
  }
  if(Vegito.isTouching(Goku)&& vegitoattackState === 1 && GokuHealth>0){
    GokuHealth -=1.5

  }
  if(GokuHealth>300 ){
    gokuhc = "#0F7626"
  }else if(GokuHealth>200 && GokuHealth<300){
    gokuhc = "#FFFF01"
  }else if(GokuHealth>0 && GokuHealth<200){
    gokuhc ="#FF0000"
  }
  drawSprites();
 fill(gokuhc)
   rect(25,50,GokuHealth,20);
  

   rect(windowWidth-425,50,VegitoHealth,20);
 
}
function VegitoAttack(){
if(frameCount%70===0){
  var rand = Math.round(random(1,2))
  switch(rand){
    case 1: Vegito.changeAnimation("vegitola",vegitola);
    vegitoFrame= frameCount;
    vegitoattackState = 1;
    break;
    case 2: Vegito.changeAnimation("vegitoma",vegitoma);
    vegitoFrame= frameCount
    vegitoattackState = 2;
    break;
  }

}
if(frameCount===vegitoFrame+40){
  Vegito.changeAnimation("vegitostanding")
}

}

function GokuAttack(){
  if(keyDown("X")&& gokuultimate ){
    Goku.changeAnimation("gokuu",gokuu)
    ultimateframe=frameCount
    
  }
  
else if(keyDown("C")&& frameCount >= keyPressedFrame+30 ){
  Goku.changeAnimation("gokula",gokula);
  keyPressedFrame=frameCount
  gokuattackState = 1;
}
else if(keyDown("V")&& frameCount >= keyPressedFrame+30){
  Goku.changeAnimation("gokuma",gokuma);
  keyPressedFrame=frameCount
  gokuattackState = 2;
}
console.log(gokuultimate)

if(frameCount>keyPressedFrame+70){
  Goku.changeAnimation("gokustanding",gokustanding)
}
if(frameCount=== ultimateframe+70){
  gokuultimate= false
}
}