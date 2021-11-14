alert("Bienvenido a SIMULADOR DE BATALLA")
let difficulty = prompt("Elija la dificultad: ¿facil, mediana o dificil?")
while (difficulty != "facil" && difficulty != "mediana" && difficulty != "dificil") {
    alert("¡Elija una dificultad!")
    difficulty = prompt("Elija la dificultad: ¿facil, mediana o dificil?")
}


if (difficulty == "facil") {
    plyrDmg = 6;
    plyrDmgBlock = 4;
    enemyDmg = 4;
    enemyDmgBlock = 2;
    remHpPlyr = 20
    remHpEnemy = 25
    enemy = "duende"
} else if (difficulty == "mediana") {
    plyrDmg = 5;
    plyrDmgBlock = 4;
    enemyDmg = 5;
    enemyDmgBlock = 2;
    remHpPlyr = 25
    remHpEnemy = 35
    enemy = "ogro"
} else if (difficulty == "dificil") {
    plyrDmg = 15;
    plyrDmgBlock = 11;
    enemyDmg = 16;
    enemyDmgBlock = 6;
    remHpPlyr = 60
    remHpEnemy = 100
    enemy = "demonio"
}
alert("Ha seleccionado " + difficulty + ". ¡Su batalla sera contra un " + enemy + "!")
let battle;

function battleState() {
    alert("El " + enemy + " tiene " + remHpEnemy + " de vida y tu tienes " + remHpPlyr + " de vida.")
}

function plyrHpAttack() {
    remHpPlyr = remHpPlyr - enemyDmg
}

function plyrHpBlock() {
    remHpPlyr = remHpPlyr - enemyDmgBlock
}

function enemyHpAttack() {
    remHpEnemy = remHpEnemy - plyrDmg
}

function enemyHpBlock() {
    remHpEnemy = remHpEnemy - plyrDmgBlock
}



if (difficulty = "facil") {
    while (remHpPlyr > 0 && remHpEnemy > 0) {
        battle = prompt("El " + enemy + " tiene " + remHpEnemy + " de vida y hace " + enemyDmg + " de daño con cada ataque. Tu tienes " + remHpPlyr + " de vida y haces " + plyrDmg + " con cada ataque. Elige A para Atacar o B para bloquear ¿Quieres atacar o bloquear?");
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
} else if (difficulty == "mediana") {
    while (remHpPlyr > 0 && remHpEnemy > 0) {
        battle = prompt("El " + enemy + " tiene " + remHpEnemy + " de vida y hace " + enemyDmg + " de daño con cada ataque. Tu tienes " + remHpPlyr + " de vida y haces " + plyrDmg + " con cada ataque. Elige A para Atacar o B para bloquear ¿Quieres atacar o bloquear?");
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
} else if (difficulty == "dificil") {
    while (remHpPlyr > 0 && remHpEnemy > 0) {
        battle = prompt("El duende tiene " + remHpEnemy + " de vida y hace " + enemyDmg + " de daño con cada ataque. Tu tienes " + remHpPlyr + " de vida y haces " + plyrDmg + " con cada ataque. Elige A para Atacar o B para bloquear ¿Quieres atacar o bloquear?");
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
}

if (remHpEnemy <= 0 && remHpPlyr > 0) {
    alert("¡Has ganado!")
} else if (remHpPlyr <= 0 && remHpEnemy > 0) {
    alert("¡Has perdido!")
} else if (remHpEnemy <= 0 && remHpPlyr <= 0) {
    alert("Fue un empate, ¡mejora tu estrategia!")
}
alert("¡Muchas gracias por jugar!")