var canvas, backgroundImage;
var allPlayers;
var car1,car2,car3,car4;
var cars = []

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup()
{
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log(displayWidth);
  console.log(displayHeight);
}


function draw()
{
  background("white");
  if(playerCount == 4)
  {
    game.update(1);
  }
  if(gameState == 1)
  {
    game.play();
  }
}