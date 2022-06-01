var sprite
var player
var monsters
var number
var bulletGroup
var monstersArray = []
var player1
var theBullets = [];
var gun
var time = 200
     
var bulletx = 0
var bullety = 0
var distancex = 0
var distancey = 0
var xx = 0
var yy = 0
function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	//player1 = createSprite(400, 300, 20, 20)
	player1 = new Player(400, 300)

	//monsters = new Zombie()
	

	//sprite = new Zombie()
	
	//sprite.rotation += 90

	//monsters = new Map()
	number = 0;

	bulletGroup = new Group()
	
	//gun = new Gun(player1)

  
}


function draw() {
	background(255)
	//sprite.follow()

	/*if(keyDown("w")){
		player.y -= 5

	}
	if(keyDown("a")){
		player.x -= 5

	}
	if(keyDown("d")){
		player.x += 5

	}
	if(keyDown("s")){
		player.y += 5

		
	}*/

	//if(mouseIsPressed){

		//setInterval(shoot, 500)
		//shoot()
		

		
	//}

	//zombie()
	zombie()

	//monsters.follow()
	for(var i = 0; i<monstersArray.length;i++){
		monstersArray[i].follow(player1)
		monstersArray[i].isShot(bulletGroup)

	}

	if(mouseIsPressed){
			bullet = createSprite(player1.x, player1.y, 1, 5)
			bullet.lifetime = 100
			bulletGroup.add(bullet)
        	xx = player1.x
            yy = player1.y
            bulletx = mouseX
            bullety = mouseY
            //console.log(this.bulletx)
            //console.log(this.bullety)
            distancex = bulletx - xx
            distancey = bullety - yy
            bullet.velocityX =  distancex/10
            bullet.velocityY =  distancey/10
			
        }

	player1.display()
	player1.move()

	


  	drawSprites();

 
}

/*function mousePressed(){
	theBullets.push(new Bullet(player1));
	console.log("firing"+theBullets.length)
	

}*/

/*function mouseReleased(){
	for(var i = 0;i<theBullets.length;i++){
		theBullets[i].display()
		//theBullets[i].travel()
		//theBullets[i].stillAlive()
	}
}*/

function zombie(){

	/*monsters.set(number, new Zombie);
	number += 1*/
	if(frameCount%time === 0){
	monsters = new Zombie(Math.round(random(20, 780)), Math.round(random(20, 680)))
	monstersArray.push(monsters)

	
	
	}

	if(monstersArray.length>4&&monstersArray.length<10)
	time = 100

	if(monstersArray.length>10&&monstersArray.length<20)
	time = 50
	

	
}



  







