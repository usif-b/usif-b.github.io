import Star from './Star.js'


export default class Background {
    constructor(screenWidth, screenHeight){
        this.width = screenWidth
        this.height = screenHeight
        this.slowed = false
    }

    initialize(){
        this.stars = new Array(200)
        for(let i = 0; i<this.stars.length; i++){
            this.stars[i] = new Star(this.width, this.height)
        }
    }

    slowStars(){
        for(let i = 0; i<this.stars.length; i++){
            if(this.stars[i].speed > 5){
                this.stars[i].speed --;
            }
        }
    }

    update(dt){
        this.stars.forEach(s => s.update(dt))
        if(this.slowed){
            this.slowStars()
        }
    }

    draw(ctx){
        this.stars.forEach(s => s.draw(ctx))
    }
}