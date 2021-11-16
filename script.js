alert("Bienvenido a SIMULADOR DE BATALLA")
let difficulty = prompt("Elija la dificultad: ¿facil, mediana o dificil?").toLowerCase();
while (difficulty != "facil" && difficulty != "mediana" && difficulty != "dificil") {
    alert("¡Elija una dificultad!")
    difficulty = prompt("Elija la dificultad: ¿facil, mediana o dificil?").toLowerCase();
}
class Enemy{
    constructor(plyrDmg, plyrDmgBlock, enemyDmg, enemyDmgBlock, remHpPlyr, remHpEnemy, nombre){
    this.plyrDmg = plyrDmg;
    this.plyrDmgBlock = plyrDmgBlock;
    this.enemyDmg = enemyDmg;
    this.enemyDmgBlock = enemyDmgBlock;
    this.remHpPlyr = remHpPlyr;
    this.remHpEnemy = remHpEnemy;
    this.nombre = nombre
}
}
const duende= new Enemy (6,4,4,2,20,25,"duende");
const ogro= new Enemy (5,4,5,2,25,35,"ogro");
const demonio= new Enemy (15,11,11,6,60,100,"demonio");

let enemies = [
    duende,
    ogro,
]

enemies.push(demonio)


let dif=[]

if (difficulty == "facil") {
    dif=enemies[0]
} else if (difficulty == "mediana") {
    dif=enemies[1]
} else if (difficulty == "dificil") {
    dif=enemies[2]
}
console.log(enemies)
console.log(dif)

alert("Ha seleccionado " + difficulty + ". ¡Su batalla sera contra un " + dif.nombre + "!")
let battle;

function battleState() {
    alert("El " + dif.nombre + " tiene " + dif.remHpEnemy + " de vida y tu tienes " + dif.remHpPlyr + " de vida.")
}

function plyrHpAttack() {
    dif.remHpPlyr = dif.remHpPlyr - dif.enemyDmg
}

function plyrHpBlock() {
    dif.remHpPlyr = dif.remHpPlyr - dif.enemyDmgBlock
}

function enemyHpAttack() {
    dif.remHpEnemy = dif.remHpEnemy - dif.plyrDmg
}

function enemyHpBlock() {
    dif.remHpEnemy = dif.remHpEnemy - dif.plyrDmgBlock
}

while (dif.remHpPlyr > 0 && dif.remHpEnemy > 0) {
    battle = prompt("El " + dif.nombre + " tiene " + dif.remHpEnemy + " de vida y hace " + dif.enemyDmg + " de daño con cada ataque. Tu tienes " + dif.remHpPlyr + " de vida y haces " + dif.plyrDmg + " con cada ataque. Elige A para Atacar o B para bloquear ¿Quieres atacar o bloquear?").toLowerCase();
    switch (battle) {
        case battle = "a":
            plyrHpAttack();
            enemyHpAttack();
            battleState();
            break;
        case battle = "b":
            plyrHpBlock();
            enemyHpBlock();
            battleState();
            break;
        default:
            alert("¡Debes elegir A para atacar o B para bloquear!");
            break;
    }
}

if (dif.remHpEnemy <= 0 && dif.remHpPlyr > 0) {
    alert("¡Has ganado!")
} else if (dif.remHpPlyr <= 0 && dif.remHpEnemy > 0) {
    alert("¡Has perdido!")
} else if (dif.remHpEnemy <= 0 && dif.remHpPlyr <= 0) {
    alert("Fue un empate, ¡mejora tu estrategia!")
}
alert("¡Muchas gracias por jugar!")