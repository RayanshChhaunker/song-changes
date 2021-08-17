song = "";
leftwX = 0;
leftwY = 0;
rightwX = 0;
rightwY = 0;
function preload() {
    song = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("MODEL DO BE LOADEDEDED");
}

function draw() {
    image(video, 0, 0, 600, 500);
}
function playfunc() {
    song.play();
	song.setVolume(1);
	song.rate(1);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        leftwX = results[0].pose.leftWrist.x;
        leftwY = results[0].pose.leftWrist.y;
        console.log(leftwX + leftwY);

        rightwX = results[0].pose.leftWrist.x;
        rightwY = results[0].pose.leftWrist.y;
        console.log(rightwX + rightwY);
    } 
}