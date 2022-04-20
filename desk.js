img ="";
function preload(){
img = loadImage("desk.JPG")
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#ffff00");
    text('Desk', 45, 130)
    noFill();
    stroke('#ffff00');
    rect(30, 110,600, 300);
}