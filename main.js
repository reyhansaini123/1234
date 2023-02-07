nosex=0;
nosey=0;

rightwristX=0;
leftwristY=0;
difference=0;


function setup(){

video = createCapture(VIDEO);

video.size(500,500);

canvas = createCanvas(400,400);
canvas.position(560,110);

poseNet = ml5.poseNet(video,modalLoaded);
poseNet.on('pose',gotPoses);

};

function draw(){

background('#808080');
fill('#00FF00');
stroke('#FF0000');
square(nosex,nosey,difference);

};

function modalLoaded(){

console.log("poseNet is working");

};

function gotPoses(results){

if(results.length > 0){

console.log(results);

nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;

console.log("nose x = "+nosex+"nose y ="+nosey);

rightwristX=results[0].pose.rightWrist.x;
leftwristX=results[0].pose.leftWrist.x;
difference=floor(rightwristX-leftwristX);

console.log("right wrist x ="+rightwristX+"left wrist x ="+leftwristX+"difference ="+difference);

};

}
