var speechrecognition = window.webkitspeechrecognition;

var recognition = new speechrecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onreult = function run (event) {

    console.log(event);

    var content = event.result[0] [0].transcript;
    console.log(content);

    if(coNTENT =="TAKE MY SELFIE")
    {
        console.log("TAKING SELFIE --- ");
        speak();
    }

    doncument.getElementById("textbox").innerHTML = content;
speak();
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking you selfie in 5 seconds";

    speak_data = document.getElementById("textbox").Value;

   var utterthis = new SpeechSynthesisUtterance(speak_data);

Synth.speak(utterThis);
webcam.attach(camera);

setTimeout(function()
{
    take_snapshot();
    save();
}, 5000);

}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90 
});
camera = document.getElementById("camera");

function take_snapshot()
{
    webcam.snap(function(data_url)    {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+dta_url+'">
    });
}


function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}


