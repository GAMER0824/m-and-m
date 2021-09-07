var apple
var mmImg
var score = 0
var i1,i2,i3,i4,i5,i6

function preload() {
  mmImg = loadImage("mm.png")
}

function setup() {
  createCanvas(1200,800);

  mm = createSprite(200, 400, 50, 50);
  mm.addImage("mm",mmImg)
  mm.scale = 0.3

  i1 = createSprite(1150,100)
  i1.shapeColor = "white"
  i1.visible = false

  i2 = createSprite(1150,205)
  i2.shapeColor = "white"
  i2.visible = false

  i3 = createSprite(1150,312)
  i3.shapeColor = "white"
  i3.visible = false

  i4 = createSprite(1150,420)
  i4.shapeColor = "white"
  i4.visible = false

  i5 = createSprite(1150,530)
  i5.shapeColor = "white"
  i5.visible = false

  i6 = createSprite(1150,640)
  i6.shapeColor = "white"
  i6.visible = false

}

function draw() {
  background("brown"); 

  if(score >= 10){
    i1.visible = true
  }

  if(score >= 1){
    i2.visible = true
  }

  if(score >= 4){
    i3.visible = true
  }

  if(score >= 4){
    i4.visible = true
  }

  if(score >= 4){
    i5.visible = true
  }

  if(score >= 4){
    i6.visible = true
  }

  if(mousePressedOver(i1) && i1.visible === true){
      i1.visible = false
      score -= 10
  }

  if(mousePressedOver(i2) && i2.visible === true){
    i2.visible = false
     score -= 1
  }

  if(mousePressedOver(i3) && i3.visible === true){
    i3.visible = false
    score -= 4
  }

  if(mousePressedOver(i4) && i4.visible === true){
    i4.visible = false
    score -= 4
  }

  if(mousePressedOver(i5) && i5.visible === true){
    i5.visible = false
    score -= 4
  }

  if(mousePressedOver(i6) && i6.visible === true){
    i6.visible = false
    score -= 4
  }
  
  
  drawSprites();

   fill("white")
   textSize(30)
   text(score,200,50)
   
}

function mouseClicked(){
 var distance = dist(mm.x,mm.y,mouseX,mouseY)
 console.log(distance)
 if(distance <= 36)
     score ++ 

}
