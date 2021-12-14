// Constructor de enemigos
class Enemy {
    constructor(plyrDmg, plyrDmgBlock, enemyDmg, enemyDmgBlock, name) {
        this.plyrDmg = plyrDmg;
        this.plyrDmgBlock = plyrDmgBlock;
        this.enemyDmg = enemyDmg;
        this.enemyDmgBlock = enemyDmgBlock;
        this.name = name
    }
}

const duende = new Enemy(10, 4, 4, 2, "duende");
const ogro = new Enemy(5, 4, 5, 2, "ogro");
const demonio = new Enemy(15, 10, 12, 6, "demonio");

let enemies = [
    duende,
    ogro,
    demonio,
]
// Fin constructor de enemigos

// Seleccion de dificultad
let remHpPlyr
let remHpEnemy
let difficulty = [
    remHpPlyr,
    remHpEnemy,
]

easy.onclick = () => {
    difficulty = enemies[0]
    difficulty.remHpPlyr = 20
    difficulty.remHpEnemy = 25
    difficultySelect()
    let enemySprite = document.getElementById("enemyType")
    enemySprite.removeChild(enemySprite.childNodes[2])
    enemySprite = document.createElement("img")
    enemySprite.src = "/images/goblin.png";
    document.getElementById("enemyType").appendChild(enemySprite)
}
medium.onclick = () => {
    difficulty = enemies[1]
    difficulty.remHpPlyr = 25
    difficulty.remHpEnemy = 35
    difficultySelect()
    let enemySprite = document.getElementById("enemyType")
    enemySprite.removeChild(enemySprite.childNodes[2])
    enemySprite = document.createElement("img")
    enemySprite.src = "/images/ogre.png";
    document.getElementById("enemyType").appendChild(enemySprite)
}
hard.onclick = () => {
    difficulty = enemies[2]
    difficulty.remHpPlyr = 60
    difficulty.remHpEnemy = 100
    difficultySelect()
    let enemySprite = document.getElementById("enemyType")
    enemySprite.removeChild(enemySprite.childNodes[2])
    enemySprite = document.createElement("img")
    enemySprite.src = "/images/demon.png";
    document.getElementById("enemyType").appendChild(enemySprite)
}
// Fin seleccion de dificultad


// Funciones de ataque, bloqueo, progreso pelea y fin pelea


function battleState() {
    document.getElementById("printRecap").value = ("El " + difficulty.name + " tiene " + difficulty.remHpEnemy + " de vida y tu tienes " + difficulty.remHpPlyr + " de vida.")
}

function attackAction() {
    difficulty.remHpPlyr = difficulty.remHpPlyr - difficulty.enemyDmg;
    difficulty.remHpEnemy = difficulty.remHpEnemy - difficulty.plyrDmg
}

function blockAction() {
    difficulty.remHpPlyr = difficulty.remHpPlyr - difficulty.enemyDmgBlock;
    difficulty.remHpEnemy = difficulty.remHpEnemy - difficulty.plyrDmgBlock
}

function battleResult() {
    if (difficulty.remHpEnemy <= 0 && difficulty.remHpPlyr > 0) {
        document.getElementById("printRecap").value = ("¡Has ganado! Selecciona nueva dificultad para pelear nuevamente.");
    } else if (difficulty.remHpPlyr <= 0 && difficulty.remHpEnemy >= 0) {
        document.getElementById("printRecap").value = ("¡Has perdido! Selecciona nueva dificultad para pelear nuevamente.");
    }
}

function difficultySelect() {
    document.getElementById("playerHP").value = difficulty.remHpPlyr;
    document.getElementById("enemyHP").value = difficulty.remHpEnemy;
    document.getElementById("printRecap").value = ("¡Su batalla sera contra un " + difficulty.name + "!")
    document.getElementById("printAttributes").value = ("Atacar: haces " + difficulty.plyrDmg + " de daño y recibes " + difficulty.enemyDmg + " daño\nBloquear: haces " + difficulty.plyrDmgBlock + " de daño y recibes " + difficulty.enemyDmgBlock + " de daño")
}

function alertFinal() {
    document.getElementById("printRecap").value = ("Selecciona nueva dificultad para pelear nuevamente.");
}
// Fin funciones de ataque, bloqueo, progreso pelea y fin pelea

// Botones de ataque y bloqueo, "if" para determinar si murio enemigo o jugador

let attack = document.getElementById("attack");
let block = document.getElementById("block")
let victory

attack.onclick = () => {
    if (difficulty.remHpEnemy <= 0 && difficulty.remHpPlyr > 0) {
        alertFinal()
    } else if (difficulty.remHpPlyr <= 0 && difficulty.remHpEnemy >= 0) {
        alertFinal()
    } else {
        attackAction();
        battleState();
        document.getElementById("playerHP").value = difficulty.remHpPlyr;
        document.getElementById("enemyHP").value = difficulty.remHpEnemy;
        battleResult()
    }
}

block.onclick = () => {
    if (difficulty.remHpEnemy <= 0 && difficulty.remHpPlyr > 0) {
        alertFinal();
    } else if (difficulty.remHpPlyr <= 0 && difficulty.remHpEnemy >= 0) {
        alertFinal();
    } else {
        blockAction();
        battleState();
        document.getElementById("playerHP").value = difficulty.remHpPlyr;
        document.getElementById("enemyHP").value = difficulty.remHpEnemy;
        battleResult()
    }
}
// Fin evento botones de ataque y bloqueo