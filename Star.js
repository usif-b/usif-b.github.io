export default class Star{
    constructor(screenWidth, screenHeight){
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.speed = 20;
        this.position = {
            x: Math.floor(Math.random()*screenWidth),
            y: Math.floor(Math.random()*screenHeight)
        };
        this.size = 2;
    }

    draw(ctx){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update(dt){
        this.position.y += this.speed/dt;
        if(this.position.y > this.screenHeight){
            this.position.y = 0;
            this.position.x = Math.floor(Math.random()*this.screenWidth);
        }
    }
}