const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,ampm,response,hour=0;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
    background(backgroundImg);
}
    Engine.update(engine);

    if(hour < 12 && hour > 0){
        ampm = "AM";
    }
    else {
        ampm = "PM";
    };

    // write code to display time in correct format here


}


async function getBackgroundImg(){

    // write code to fetch time from API

    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
var responseJSON =  await response.json();
var datetime=responseJSON.datetime;
    // write code slice the datetime
var hour=datetime.slice(11,13);
textSize(35);
text("TIME : " + hour+ampm,50,50);

console.log(hour);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06 ){ 
        bg = "sunrisel.png"; 
    }else if(hour>=06 && hour<=08 ){ 
        bg = "sunrise2.png"; 
    }else if(hour>=23 && hour==00){ 
        bg = "sunset10.png"; 
    }else if(hour==00 && hour<=03){
        bg = "sunset11.png"; 
    }else{ 
        bg = "sunrise6.png"; 
        
    } 


    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg);
}
