img ="";
function preload(){
img = loadImage("bottle.JPG")
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#ffff00");
    text('Bottle', 155, 50)
    noFill();
    stroke('#ffff00');
    rect(150, 30, 200, 350);
}