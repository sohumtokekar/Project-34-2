//Create variables here
var dog,happyDog;
var dogimg,happyDogimg;
var database,foodS,foodStock;

function preload()
{
  dogimg = loadImage("images/dogImg.png");
  happyDogimg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,20,20);
  dog.addImage(dogimg);

  foodStock = database.ref('food');
  foodStock.on("value",function(readStock){
    console.log(readStock.val());
    foodS = readStock.val();
  }, function (error){
    console.log("Error : " + error.code );
  });

}


function draw() {  
  background(46,139,87);

//readStock(foodStock);
//writeStock(); 

  if(keyWentDown(UP_ARROW)){
    foodS = foodS - 1;
    writeStock(foodS);
    dog.addImage(happyDogimg);
  }
  drawSprites();
  //add styles here
  
}

//function readStock(data){
  //foodS = database.ref('food');
 // console.log(foodStock);
 // foodS = data.val();
//}


function writeStock(x){
database.ref('/').update({
  food:x
})

}

