class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.bulletx = 0
        this.bullety = 0
        this.distancex = 0
        this.distancey = 0
        this.xx = 0
        this.yy = 0
      
    }

    display(){
        rectMode(CENTER)
        this.rect = rect(this.x,this.y,20,20)
    }

    move(){
        if(keyDown("w")){
            this.y -= 5
    
        }
        if(keyDown("a")){
            this.x -= 5
    
        }
        if(keyDown("d")){
            this.x += 5
    
        }
        if(keyDown("s")){
            this.y += 5
    
            
        }

        
            

        
    }

    fire(){
       
    }
}