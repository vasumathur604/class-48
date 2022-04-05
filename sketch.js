var hunter,hunterAnimation;
var zombie,zombieImage;
var bullet,bolletImg;
var score=0;
function preload(){
    
hunterImage1 = loadImage("Images/hunter1.png")
hunterImage2 = loadImage("Images/hunter2.png")
//zombieImage = loadAnimation("Images/zombie1.png","Images/zombie2.png","Images/zombie3.png","Images/zombie4.png")
zombieImage = loadImage("Images/zombie1.png") ;
backgroundImage = loadImage("Images/background.jpg");

bulletImage = loadImage("Images/bullet.png");
}

function setup(){
createCanvas(1580,850)


    hunter=createSprite(260,600)
hunter.addImage(hunterImage1);
hunter.scale=0.75
//hunter.debug=true;
hunter.setCollider("rectangle",0,0,20,370)


bulletGroup=new Group();
zombieGroup=new Group();
    
}
function draw(){

    background(backgroundImage)
    fill("orange")
    textSize(30); 
    text("score:"+score,90,105)
      
//hunter moving
    if(keyDown ("UP_ARROW")){
    hunter.y-=5;}

    if(keyDown ("DOWN_ARROW")){
    hunter.y+=5;}

    if(keyDown ("LEFT_ARROW")){
    hunter.x-=5;}

    if(keyDown ("RIGHT_ARROW")){
    hunter.x+=5;}

// hunter shooting
    if(keyWentDown ("R")){
        hunter.addImage(hunterImage2);

        bullet=createSprite(hunter.x+112,hunter.y-78)
     bullet.addImage("bulletShoot",bulletImage)
     bullet.velocityX=4;
  //   bullet.debug=true;
     bullet.scale=0.25;

     bulletGroup.add(bullet);


    }    
    if(keyWentUp ("R")){
        hunter.addImage(hunterImage1);
    }


multiZombie();
//if zombieGroup is touching bulletGroup
if(bulletGroup.isTouching(zombieGroup)){
for(var i=0;i<zombieGroup.length;i++){


    if(zombieGroup[i].isTouching(bulletGroup)){
        zombieGroup[i].destroy();
        bulletGroup.destroyEach();
    score=score+1;
    
}
}
}
if(hunter.isTouching(zombieGroup)){
    for(var i=0;i<zombieGroup.length;i++){
    
    if(zombieGroup[i].isTouching(hunter)){
        fill("red")
        textSize(120); 
        text("GAME OVER",590,225)
          
        
        hunter.destroy();
        zombieGroup[i].destroyEach();    


    }
}}
drawSprites();
}

// mutiple zombie
function multiZombie(){
    if(frameCount % 60===0){
        
var zombie=createSprite(1500,600)
    zombie.addAnimation("movingZombie",zombieImage);
    zombie.scale=1.5
    
    //zombie.debug=true;
zombie.velocityX=-5
zombie.y=Math.round(random(60,730))

zombie.setCollider("rectangle",0,0,10,200)
zombie.lifetime=1581

zombieGroup.add(zombie); 
}

}


