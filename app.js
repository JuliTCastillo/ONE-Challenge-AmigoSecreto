// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []

function agregarAmigo(){
    //obtenemos el valor del input-text
    let nombreAmigo = document.getElementById("amigo")
    if (nombreAmigo.value){
        elementoHTML("msg", "")
        listaAmigos.push(nombreAmigo)
    }
    else{
        elementoHTML("msg", "❕Ingrese un nombre por favor!")
    }
}

function elementoHTML(id, mensaje){
    document.getElementById(id).innerText = mensaje
}