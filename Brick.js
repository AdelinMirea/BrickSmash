class Brick{
    constructor(posX, posY){
        this.brick = document.createElement('img');
        this.brick.src = 'src/brick.png'
        this.brick.style.width = '60px';
        this.brick.style.height = '25px';
        this.brick.style.borderRadius = '5px';   
        this.brick.style.position = 'absolute';
        this.brick.style.left = posX + 'px';
        this.brick.style.top = posY + 'px';
    }

    get offsetTop() {
        return this.brick.offsetTop;
    }

    get offsetLeft(){
        return this.brick.offsetLeft;
    }

    get offsetHeight(){
        return this.brick.offsetHeight;
    }
    
    get offsetWidth(){
        return this.brick.offsetWidth;
    }

    get BrickElem(){
        return this.brick;
    }

    hide(){
        this.brick.style.display = 'none';
    }

    get isDisplayed(){
        if(this.brick.style.display != 'none'){
            return true;
        }else{
            return false;
        }
    }
}