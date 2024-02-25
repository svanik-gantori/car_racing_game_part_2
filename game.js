var spawnObstacles;
var car1health=100;
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var car2health=100;
function preload()
{
    car1=createSprite(100,100,100,100);
    car2=createSprite(400,200,100,100);
    obstacle1=loadImage("obstacle1.png");
    obstacle2=loadImage("obstacle2.png");
    obstacle3=loadImage("obstacle3.png");
    obstacle4=loadImage("obstacle4.png");
}
function setup()
{
    canvas=createCanvas(windowWidth,windowHeight);
    obstaclegroup=new Group();
    document.getElementById("health1").innerHTML=car1health;
}
function draw()
{
    spawnObstacles();
    drawSprites();
}

function spawnObstacles()
{
    if(frameCount%60==0)
    {
        obstacle=createSprite(random(50,400),random(50,400),20,20);
        var rand=Math.round(random(1,4));
        switch(rand){
            case 1:obstacle.addImage(obstacle1);
            break;
            case 2:obstacle.addImage(obstacle2);
            break;
            case 3:obstacle.addImage(obstacle3);
            break;
            case 4:obstacle.addImage(obstacle4);
            break;
            default:break;

               }
               obstacle.scale=0.3;
               obstacle.lifetime=5000;
               obstaclegroup.add(obstacle);
    }
}