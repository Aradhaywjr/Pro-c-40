var database;
var canvas;
var bgImg;
var form
var player;
var gameState;
var playerCount;
var car1
var car2
var cars = []
var allPlayers
var car1Img
var car2Img
var track
var fuelImg,coinImg,obstacle1Img,obstacle2Img,fuels,coins
function preload() {
    bgImg = loadImage("assets/background.png")
    car1Img = loadImage("assets/car1.png")
    car2Img = loadImage("assets/car2.png")
    track = loadImage("assets/track.jpg")
    fuelImg = loadImage("assets/fuel.png")
    coinImg = loadImage("assets/goldCoin.png")

}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
   database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw() {
    background(bgImg)
    if(playerCount === 2){
        game.update(1)
    }
    if(gameState === 1){
        game.play()
    }
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}