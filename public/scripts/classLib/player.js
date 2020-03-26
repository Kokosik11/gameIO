class Player {
    positionX = 0;
    rotate = -43;
    objectID;

    constructor() {
        this.objectID = document.getElementById("player");
    }

    MoveTo(toValue, mouseX) {
        if (mouseX > this.positionX) {
            this.positionX += toValue;
        } else {
            this.positionX -= toValue;
        }
        this.objectID.style.transform = `translateX(${this.positionX}px) rotate(${this.rotate}deg)`;
    }

    get objectID() {
        return this.objectID;
    }

    get positionX() {
        return this.positionX;
    }

    set positionX(value) {
        this.positionX = value;
    }
}
