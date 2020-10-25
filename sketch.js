const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bullet1, bullet2, bullet3, bullet4, boundary1, boundary2, boundary3;

var wall1s, wall2s, wall3s, wall4s;

var deformation, speed1, speed2, speed3, speed4, weight, thickness1, thickness2, thickness3, thickness4;

var cnvs;

function setup() {
  cnvs = createCanvas(1600,550);
  engine = Engine.create();
  world = engine.world;

  wall1s = new Group;

  wall2s = new Group;

  wall3s = new Group;

  wall4s = new Group;

  wallThickness();

  bullet1 = createSprite(100, 50, 30, 30);
  bullet1.shapeColor = color(255, 255, 255);

  bullet2 = createSprite(100, 200, 30, 30);
  bullet2.shapeColor = color(255, 255, 255);

  bullet3 = createSprite(100, 350, 30, 30);
  bullet3.shapeColor = color(255, 255, 255);

  bullet4 = createSprite(100, 500, 30, 30);
  bullet4.shapeColor = color(255, 255, 255);

  boundary1 = createSprite(800, 125, 1600, 20);
  boundary2 = createSprite(800, 275, 1600, 20);
  boundary3 = createSprite(800, 425, 1600, 20);

  speed1= random(223, 321);
  speed2 = random(223, 321);
  speed3 = random(223, 321);
  speed4 = random(223, 321);
  weight = random(30, 52);
}

function draw() {
  background(0, 0, 0);
  if(keyCode === 32){
    bullet1.velocityX = speed1;
    bullet2.velocityX = speed2;
    bullet3.velocityX = speed3;
    bullet4.velocityX = speed3;
  }

  if(keyCode === 114 && bullet1.velocityX === 0 && bullet2.velocityX === 0 && bullet3.velocityX === 0){
    reset();
  }
  
  if(bullet1.isTouching(wall1s)){
    bullet1.velocityX = 0;
    var damage1 = (0.5 * weight * speed1 *speed1)/(thickness1 * thickness1 * thickness1);
    //console.log(damage1);
    if(damage1>5){
      bullet1.shapeColor = color(255, 0, 0);
    }
    if(damage1<5){
      bullet1.shapeColor = color(0, 255, 0);
    }
    if(damage1<800){
      bullet1.shapeColor = color(0, 255, 0);
    }
  }

  if(bullet2.isTouching(wall2s)){
    bullet2.velocityX = 0;
    var damage2 = (0.5 * weight * speed2 *speed2)/(thickness2 * thickness2 * thickness2);
    //console.log(damage1);
    if(damage2>5){
      bullet2.shapeColor = color(255, 0, 0);
    }
    if(damage2<5){
      bullet2.shapeColor = color(0, 255, 0);
    }
    if(damage2<800){
      bullet2.shapeColor = color(0, 255, 0);
    }
  }

  if(bullet3.isTouching(wall3s)){
    bullet3.velocityX = 0;
    var damage3 = (0.5 * weight * speed3 *speed3)/(thickness3 * thickness3 * thickness3);
    //console.log(damage1);
    if(damage3>5){
      bullet3.shapeColor = color(255, 0, 0);
    }
    if(damage3<5){
      bullet3.shapeColor = color(0, 255, 0);
    }
  }

  if(bullet4.isTouching(wall4s)){
    bullet4.velocityX = 0;
    var damage4 = (0.5 * weight * speed4 *speed4)/(thickness4 * thickness4 * thickness4);
    //console.log(damage4);
    if(damage4>5){
      bullet4.shapeColor = color(255, 0, 0);
    }
    if(damage4<5){
      bullet4.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

function reset(){
  bullet1.position.x = 100;
  bullet2.position.x = 100;
  bullet3.position.x = 100;
  bullet4.position.x = 100;
  bullet1.shapeColor = color(255, 255, 255);
  bullet2.shapeColor = color(255, 255, 255);
  bullet3.shapeColor = color(255, 255, 255);
  bullet4.shapeColor = color(255, 255, 255);
  wall1s.destroyEach();
  wall2s.destroyEach();
  wall3s.destroyEach();
  wall4s.destroyEach();
  speed1= random(223, 321);
  speed2 = random(223, 321);
  speed3 = random(223, 321);
  speed4 = random(223, 321);
  thickness1 = random(22, 83);
  thickness2 = random(22, 83);
  thickness3 = random(22, 83);
  thickness4 = random(22, 83);
  wallThickness();
}

function wallThickness(){
  thickness1 = random(22, 83);
  thickness2 = random(22, 83);
  thickness3 = random(22, 83);
  thickness4 = random(22, 83);

  var wall1 = createSprite(1500, 50, thickness1, 80);
  wall1.shapeColor = color(80, 80, 80);
  wall1s.add(wall1);
  wall1.depth = -1;

  var wall2 = createSprite(1500, 200, thickness2, 80);
  wall2.shapeColor = color(80, 80, 80);
  wall2s.add(wall2);
  wall2.depth = -1;

  var wall3 = createSprite(1500, 350, thickness3, 80);
  wall3.shapeColor = color(80, 80, 80);
  wall3s.add(wall3);
  wall3.depth = -1;

  var wall4 = createSprite(1500, 500, thickness4, 80);
  wall4.shapeColor = color(80, 80, 80);
  wall4s.add(wall4);
  wall4.depth = -1;
}