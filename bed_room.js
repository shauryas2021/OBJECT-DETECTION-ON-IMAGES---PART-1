img ="";
function preload(){
img = loadImage("bed.jpg")
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#ffff00");
    text('Bed', 45, 75)
    noFill();
    stroke('#ffff00');
    rect(30, 60,600, 350);
}