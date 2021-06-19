var NoseX=0;
var NoseY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/dQznTrFr/clipart-mustache-light-blue-2.png')
}
function setup(){
    canvas=createCanvas(250,300);
    canvas.center();
    video=createCapture();
    video.size(250,300);
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("model loaded")
}
function gotPoses(results){
    if(results.length>0){
        NoseX=results[0].pose.nose.x-25;
        NoseY=results[0].pose.nose.y+5;
        console.log(results);
        console.log("nose x"+NoseX);
        console.log("nose y"+NoseY);
    }
}
function draw(){
    image(video,0,0,250,300)
    image(clown_nose,NoseX,NoseY,50,30)
}
function take_snapshot(){
    save('My_filter_image.png')
}