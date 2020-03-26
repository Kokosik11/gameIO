// Экспорт элементов из html
let playerField = document.getElementById("playerField");
let coordsField = document.getElementById("coords");
let gameField = document.getElementById("gameField");

let player = new Player();
let bulletCount = 0;
// Получаем информацию стилей элемента
let gameFieldStyle = window.getComputedStyle(gameField);
let bodyStyles = window.getComputedStyle(document.body);
let playerStyles = window.getComputedStyle(player.objectID);

let leftField = parseInt(gameFieldStyle.marginLeft) + 25;
let rightField = parseInt(bodyStyles.width) - leftField * 2;

function mouseDownEvent() {
    addEventListener("mousemove", gameMouse);
}

function mouseUpEvent() {
    removeEventListener("mousemove", gameMouse);
}

let bulTimer;
function createBullet() {
    let bullet = new Bullet(bulletCount++);
    bullet.Spawn(player);
}

function setBulletInterval() {
    bulTimer = setInterval(createBullet, 500);
}

function removeBulletInterval() {
    bulTimer = clearInterval(bulTimer);
}

let timer;

function gameMouse(e) {
    let mouseX = e.clientX - leftField;

    if (mouseX > 0 && mouseX < rightField) {
        player.MoveTo(10, mouseX);
    }
}

// События
addEventListener("mousedown", mouseDownEvent);
addEventListener("mouseup", mouseUpEvent);

addEventListener("mousedown", setBulletInterval);
addEventListener("mouseup", removeBulletInterval);
