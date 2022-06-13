function preload()
{

}

function setup()
{
    canvas= createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);  
    poseNet.on('pose',gotposes);
}

function draw()
{
    image(video,0,0,300,300);
}

function modelloaded()
{
    console.log("poseNet model is loaded");
}


function gotposes(results)
{
    if(results.length > 0)
    {
      console.log(results);
      console.log("leftEye X = "+results[0].pose.leftEye.x);
      console.log("leftEye Y = "+results[0].pose.leftEye.y);
      console.log("rightEye X = "+results[0].pose.rightEye.x);
      console.log("rightEye Y = "+results[0].pose.rightEye.y);
    }
    
}