class Ball{
    constructor(canvasW, canvasH){
        this.ball = document.createElement('img');
        this.ball.src = 'src/ball.png'
        this.ball.style.width = '50px';
        this.ball.style.height = '50px';
        this.ball.style.borderRadius = '50px';
        this.ball.style.backgroundColor = 'white';
        this.ball.style.position = 'absolute';
        this.ball.style.left = canvasW/2 + 'px';
        this.ball.style.top = canvasH/2 + 'px';
    }

    get Elem(){
        return this.ball;
    }

    get offsetTop() {
        return this.ball.offsetTop;
    }

    get offsetLeft(){
        return this.ball.offsetLeft;
    }

    get offsetHeight(){
        return this.ball.offsetHeight;
    }
    
    get offsetWidth(){
        return this.ball.offsetWidth;
    }

    left(pos){
        this.ball.style.left = pos;
    }
    
    top(pos){
        this.ball.style.top = pos;
    }
    
}