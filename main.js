//https://teachablemachine.withgoogle.com/models/Ij7TJ48hq/
console.log(ml5.version);

Webcam.set({

width:350,
height:300,
img_format:"jpg",
jpg_quality:30

});

//camera=ffef;
Webcam.attach(document.getElementById("WebcamViewer"));

function takeSnapshot(){

Webcam.snap(

function(data_uri){

    document.getElementById("WebcamResulter").innerHTML="<img id='imgStorer' src='"+data_uri+"'>";

});


}


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ij7TJ48hq/model.json", modelLoaded);

function modelLoaded(){

console.log("model is loaded");


}