"use strict"

const lampada = document.getElementById("lampada")

function lampadaInteira() {
    return !lampada.src.includes("quebrada")
}

function botoesLigaDesliga(estadoLiga, estadoDesliga) {
    document.getElementById("ligar").disabled = estadoLiga
    document.getElementById("desligar").disabled = estadoDesliga
}

function ligarLampada() {
    if (lampadaInteira()) {
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false)
    }
}

function desligarLampada() {
    if (lampadaInteira()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true)
}

document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)

lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout", desligarLampada)
lampada.addEventListener("dblclick", quebrarLampada)
