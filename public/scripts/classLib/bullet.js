class Bullet {
    static Count = 0;
    positionX = 0;
    positionY = 425;
    bullet = document.createElement("div");
    objectID;

    constructor(count) {
        this.Count = count;
        this.Create();
        this.objectID = document.getElementById(`bullet_${this.Count}`);
    }

    Create() {
        this.Count++;
        this.bullet.setAttribute("id", `bullet_${this.Count}`);
        this.bullet.setAttribute("class", `bullet`);
        gameField.append(this.bullet);
    }

    Spawn(player) {
        this.positionX = player.positionX + 35;
        this.objectID.style.transform = `translate(${this.positionX}px,${this.positionY}px)`;
        gameField.append(this.objectID);
    }

    get objectID() {
        return this.objectID;
    }
}
