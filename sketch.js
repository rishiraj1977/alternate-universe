const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sun,sunI;
var planet1;
var planet2;
var planet3;
var planet4;
var comet;
var meteor;
var asteroid;
var rocket;

function preload(){
    sunI = loadImage('../images/sun.png');
    planet1I = loadImage('../images/jupiterimg.png');
    planet2I = loadImage('../images/p2.png');
    planet3I = loadImage('../images/planet1.png');
    planet4I = loadImage('../images/planet2.png');
    cometI = loadImage('../images/comet.jpg');
    meteorI = loadImage('../images/meteor.jpg');
    asteroidI = loadImage('../images/asteroid.jpg');
    rocketI = loadImage('../images/rocket.jpg');

}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
 
    sun = createSprite(windowWidth/2,windowHeight/2 ,5,5);
    sun.addImage(sunI);
    sun.scale = 0.4;
  
   planet1 = createSprite(1000,300, 5,5);
   planet1.addImage(planet1I);
   planet1.scale = 0.2;

   planet2 = createSprite(625, 515, 5,5);
   planet2.addImage(planet2I);
   planet2.scale = 0.3;

   planet3 = createSprite(740,200,5,5);
   planet3.addImage(planet3I);
   planet3.scale = 0.15;

   planet4 = createSprite(350,300,5,5);
   planet4.addImage(planet4I);
   planet4.scale = 0.15;

   
   comet = createSprite(1200,150,5,5);
   comet.addImage(cometI);
   comet.scale = 0.3;

   meteor = createSprite(100,100,5,5);
   meteor.addImage(meteorI);
   meteor.scale = 1;

   asteroid = createSprite(1200,500,5,5);
   asteroid.addImage(asteroidI);
   asteroid.scale = 0.7;

   
   rocket = createSprite(100,500,5,5);
   rocket.addImage(rocketI);
   rocket.scale = 1;

  

  
}

function draw(){
    background(0);
    Engine.update(engine);

    sun.setCollider("circle", 0, 0, sun.width/2);
    
   
    planet1.setCollider("circle", 0, 0, planet1.width/2);
    

    planet2.setCollider("circle", 0, 0, planet2.width/2);
    

    planet3.setCollider("circle", 0, 0, planet3.width/2);

    planet4.setCollider("circle", 0, 0, planet4.width/2);

    comet.setCollider("circle", 0, 0, comet.width/2);
    
    asteroid.setCollider("circle", 0, 0, asteroid.width/2);

    rocket.setCollider("circle", 0, 0, rocket.width/2);
    
    meteor.setCollider("circle", 0, 0, meteor.width/2);
  
    
    if(frameCount % 2 === 0){
        sun.scale = sun.scale + 0.0035;
     }
   
    if(sun.isTouching(planet1)){
        planet1.destroy();
    }
    if(sun.isTouching(planet2)){
        planet2.destroy();
    }
    if(sun.isTouching(planet3)){
        planet3.destroy();
    }
    if(sun.isTouching(planet4)){
        planet4.destroy();
    }
    if(sun.isTouching(comet)){
        comet.destroy();
    }
    if(sun.isTouching(asteroid)){
        asteroid.destroy();
    }
    if(sun.isTouching(meteor)){
        meteor.destroy();
    }
    if(sun.isTouching(rocket)){
        rocket.destroy();
    }


    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(windowWidth/2, windowHeight/2, 750);
    ellipse(windowWidth/2, windowHeight/2, 300);
    ellipse(windowWidth/2, windowHeight/2, 450);
    ellipse(windowWidth/2, windowHeight/2, 600);
  
  
  drawSprites();
 
}

