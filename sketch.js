img="";
var about;
function preload()
{
  car1=createSprite(100,100,100,100);
}

function draw()
{
    about.mousePressed(()=>{
        play=document.getElementById("hi");
        play.hide();
        gameState='about';



    });
    drawSprites();
}

function info()
{
    window.location.replace("info.html");
}
function play()
{
    window.location.replace("game.html");
}

