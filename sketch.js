var skyIMG, balloon, balloonIMG;
var cursor, cursorIMG;

function preload(){
    balloonIMG = loadImage("Images/Balloon.png");
    skyIMG = loadImage("Images/sky.jpg");
    cursorIMG = loadImage("Images/Cursor.png");
}

function setup(){
createCanvas(1200,800);

balloon = createSprite(600,650);
balloon.addImage(balloonIMG);
balloon.scale = 0.3;

cursor = createSprite(mouseX,mouseY);
cursor.addImage()


}

function draw(){
    background(skyIMG);

    drawSprites();
}