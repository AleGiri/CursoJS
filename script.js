
if (localStorage.getItem("Registrado") !== "true") {
    let playerNameInput = prompt("Ingrese su nombre");
    localStorage.setItem("Nombre", playerNameInput);
    document.getElementById("playerName").value = localStorage.getItem("Nombre");
    localStorage.setItem("Registrado", "true")
} else {
    document.getElementById("playerName").value = localStorage.getItem("Nombre")
}

credentialsButton.onclick = () => {
    playerNameInput = prompt("¿Que nombre desea usar?")
    localStorage.setItem("Nombre", playerNameInput);
    document.getElementById("playerName").value = localStorage.getItem("Nombre")
}

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

const duende = new Enemy(10, 4, 4, 2, "Duende");
const ogro = new Enemy(5, 4, 5, 2, "Ogro");
const demonio = new Enemy(15, 10, 12, 6, "Demonio");

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
let darkMode = false
darkModeButton.onclick = () => {
    let bgMode = document.getElementById("battleFrame")
    let boardMode = document.getElementById("actionBar")
    switch (darkMode) {
        case true:
            bgMode.style = 'background-image: url(images/battlebg.jpg);'
            boardMode.style = "background-image: url(images/backboard.png)"
            darkMode = false
            console.log("Dark Mode:" + darkMode)
            break;
        case false:
            bgMode.style = 'background-image: url(images/battlebgnight.jpg);'
            boardMode.style = "background-image: url(images/backboardnight.png)"
            darkMode = true
            console.log("Dark Mode:" + darkMode)
    }
}
let modelSex = "ModelMasc"
modelButton.onclick = () => {
    let modelChange = document.getElementById("war")
    switch (modelSex) {
        case "ModelFem":
            modelChange.src = "images/warriormgif.gif"
            modelSex = "ModelMasc"
            console.log(modelSex)
            break;
        case "ModelMasc":
            modelChange.src = "images/warriorfgif.gif"
            modelSex = "ModelFem"
            console.log(modelSex)
    }
}




easy.onclick = () => {
    difficulty = enemies[0]
    difficulty.remHpPlyr = 20
    difficulty.remHpEnemy = 25
    difficultySelect()
    let enemySprite = document.getElementById("enemyType")
    enemySprite.removeChild(enemySprite.childNodes[2])
    enemySprite = document.createElement("img")
    enemySprite.src = "images/goblingif.gif";
    document.getElementById("enemyType").appendChild(enemySprite)
    document.getElementById("enemyName").value = difficulty.name
}
medium.onclick = () => {
    difficulty = enemies[1]
    difficulty.remHpPlyr = 25
    difficulty.remHpEnemy = 35
    difficultySelect()
    let enemySprite = document.getElementById("enemyType")
    enemySprite.removeChild(enemySprite.childNodes[2])
    enemySprite = document.createElement("img")
    enemySprite.src = "images/ogregif.gif";
    document.getElementById("enemyType").appendChild(enemySprite)
    document.getElementById("enemyName").value = difficulty.name
}
hard.onclick = () => {
    difficulty = enemies[2]
    difficulty.remHpPlyr = 60
    difficulty.remHpEnemy = 100
    difficultySelect()
    let enemySprite = document.getElementById("enemyType")
    enemySprite.removeChild(enemySprite.childNodes[2])
    enemySprite = document.createElement("img")
    enemySprite.src = "images/demongif.gif";
    document.getElementById("enemyType").appendChild(enemySprite)
    document.getElementById("enemyName").value = difficulty.name
}
// Fin seleccion de dificultad


// Funciones de ataque, bloqueo, progreso pelea y fin pelea


function battleState() {
    // Funcion que agrega cantidad de vida restante del jugador y del enemigo y su nombre a un cuadro donde se actualiza despues de cada accion
    document.getElementById("printRecap").value = ("El " + difficulty.name.toLowerCase() + " tiene " + difficulty.remHpEnemy + " de vida y tu tienes " + difficulty.remHpPlyr + " de vida.")
}

function attackAction() {
    // Funcion para determinar la vida del enemigo y jugador despues de un ataque
    difficulty.remHpPlyr = difficulty.remHpPlyr - difficulty.enemyDmg;
    difficulty.remHpEnemy = difficulty.remHpEnemy - difficulty.plyrDmg
}

function blockAction() {
    // Funcion para determinar la vida del enemigo y jugador despues de un bloqueo
    difficulty.remHpPlyr = difficulty.remHpPlyr - difficulty.enemyDmgBlock;
    difficulty.remHpEnemy = difficulty.remHpEnemy - difficulty.plyrDmgBlock
}

function difficultySelect() {
    // Funcion que agrega los valores de vida, valores de daño y tipo de enemigo y del jugador como mensaje inicial
    document.getElementById("playerHP").value = difficulty.remHpPlyr;
    document.getElementById("enemyHP").value = difficulty.remHpEnemy;
    document.getElementById("printRecap").value = ("¡Su batalla sera contra un " + difficulty.name.toLowerCase() + "!")
    document.getElementById("printAttributes").value = ("Atacar: haces " + difficulty.plyrDmg + " de daño y recibes " + difficulty.enemyDmg + " daño\nBloquear: haces " + difficulty.plyrDmgBlock + " de daño y recibes " + difficulty.enemyDmgBlock + " de daño")
}

function alertFinal() {
    document.getElementById("printRecap").value = ("Selecciona nueva dificultad para pelear nuevamente.");
}
// Fin funciones de ataque, bloqueo, progreso pelea y fin pelea

// Funcion de guardado en localstorage de victorias y derrotas

let winCount = localStorage.getItem("Victorias")
let loseCount = localStorage.getItem("Derrotas")

function winPrint() {
    document.getElementById("wins").value = winCount
}

function losePrint() {
    document.getElementById("loses").value = loseCount
}


function battleResult() {
    // Funcion para determinar si el jugador o el enemigo murio, agregando un mensaje de victoria o derrota y genera un localStorage que guarda la cantidad total de victorias y derrotas en el panel inferior
    if (difficulty.remHpEnemy <= 0 && difficulty.remHpPlyr > 0) {
        document.getElementById("printRecap").value = ("¡Has ganado! Selecciona nueva dificultad para pelear nuevamente.");

        if (localStorage.getItem("Victorias") == null && localStorage.getItem("Victorias") == 0) {
            localStorage.setItem("Victorias", 0)
        } else {
            winCount = JSON.parse(localStorage.getItem('Victorias')) + 1
            localStorage.setItem('Victorias', JSON.stringify(winCount))
        }
        winPrint()
    } else if (difficulty.remHpPlyr <= 0 && difficulty.remHpEnemy >= 0) {
        document.getElementById("printRecap").value = ("¡Has perdido! Selecciona nueva dificultad para pelear nuevamente.");

        if (localStorage.getItem("Derrotas") == null && localStorage.getItem("Derrotas") == 0) {
            localStorage.setItem("Derrotas", 0)
        } else {
            loseCount = JSON.parse(localStorage.getItem('Derrotas')) + 1
            localStorage.setItem('Derrotas', JSON.stringify(loseCount))
        }
        losePrint()
    }
}
winPrint()
losePrint()
// Fin funcion de guardado en localstorage de victorias y derrotas

// Botones de ataque y bloqueo, "if" para determinar si murio enemigo o jugador

let attack = document.getElementById("attack");
let block = document.getElementById("block")


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