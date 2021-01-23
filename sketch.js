var movingrect,fixedrect;

function setup() {
  createCanvas(1200,800);
  
  movingrect= createSprite(600, 400, 50, 80);
  movingrect.shapeColor="red";
  fixedrect= createSprite(400,400,80,30);
  fixedrect.shapeColor="red";
  movingrect.velocityX=-5;
  movingrect.velocityY = 0;
}


function draw() {
  background("black");  
 

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && 
    movingrect.y- fixedrect.y < movingrect.height/2 + fixedrect.height/2 && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  else {
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2){
    movingrect.velocityX = movingrect.velocityX * (-1);
    //movingrect.velocityY= movingrect.velocityY * (-1);
  }

  if(movingrect.y - fixedrect.y <movingrect.height/2 + fixedrect.height/2 && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
  //  movingrect.velocityX=movingrect.velocityX * (-1);
    movingrect.velocityY= movingrect.velocityY * (-1);
  }
 


  drawSprites();
}