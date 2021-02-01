var background2
var  cat, mouse, catimage, mouseimage, catmoving, mousemoving, mousea, cata
function preload() {
    background2 = loadImage("garden.png")
    catimage = loadImage("cat1.png")
    mouseimage = loadImage("mouse1.png")

    catmoving = loadAnimation("cat2.png","cat3.png")
    mousemoving = loadAnimation("mouse2.png", "mouse3.png")
    mousea = loadAnimation("mouse4.png")
    cata = loadAnimation("cat4.png")
}

function setup(){
    createCanvas(1000,800);
   cat = createSprite(800, 600, 10, 10)
   cat.addImage(catimage)
   cat.scale = 0.1
   mouse = createSprite(200, 600, 10, 10)
   mouse.addImage(mouseimage)
   mouse.scale = 0.1

   cat.addAnimation("CATMOVE",catmoving)
   mouse.addAnimation("MOUSEMOVE",mousemoving)
   cat.addAnimation("CATA",cata)
   mouse.addAnimation("MOUSEA",mousea)


}

function draw() {

    background(background2);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <= cat.width/2-mouse.width/2){
        cat.velocityX = 0
        cat.changeAnimation("CATA", cata)
        mouse.changeAnimation("MOUSEA", mousea)
      cat.x = 250 
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5
      cat.changeAnimation("CATMOVE", catmoving)
      mouse.changeAnimation("MOUSEMOVE", mousemoving)
  }


}
