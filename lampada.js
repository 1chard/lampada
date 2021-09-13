"use strict"


const lampada = document.getElementById("lampada")
var statusLampada = false

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
        statusLampada = true
    }
}

function desligarLampada() {
    if (lampadaInteira()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
        statusLampada = false
    }
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true)
}



function piscarLampada() {


    setInterval(() => {
        if (statusLampada)
            desligarLampada()
        else
            ligarLampada()
    }, 300)

}

document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)
document.getElementById("piscar").addEventListener("click", piscarLampada)

lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout", desligarLampada)
lampada.addEventListener("dblclick", quebrarLampada)
