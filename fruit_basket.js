img ="";
function preload(){
img = loadImage("fruit_basket.JPG")
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#ff0000");
    text('Bottle', 45, 130)
    noFill();
    stroke('#ff0000');
    rect(30, 110,600, 300);
}