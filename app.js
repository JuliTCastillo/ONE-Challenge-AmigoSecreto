// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []

function agregarAmigo(){
    //obtenemos el valor del input-text
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo){ //Verificamos que se haya ingresado algo
        elementoHTML("msg", ""); //limpiamos el parrafo de mensaje
        if(!listaAmigos.includes(nombreAmigo)){ //verificamos que el elemento que se quiera ingrese no exista en la lista
            elementoHTML("msg", ""); //vaciamos el parrafo
            listaAmigos.push(nombreAmigo); //guardamos el elemento en la lista
            document.getElementById("amigo").value = ""; //vaciamos el input
            actualizarLista(listaAmigos); //lo mostramos en la web
        }
        else{
            elementoHTML("msg", "❕Este amigo ya esta en la lista");
        }
    }
    else{
        elementoHTML("msg", "❕Ingrese un nombre por favor!");
    }
    console.log(listaAmigos);
}

function sortearAmigo(){
    let cantidad = listaAmigos.length;
    let resultado = document.getElementById("resultado")
    if(cantidad > 0 ){
        let posicion = Math.floor(Math.random() * cantidad)
        resultado.innerHTML = `
            <p>Su amigo secreto es...</p>
            <p>${listaAmigos[posicion]}</p>
        `
    }
    else{
        resultado.style.color = "red"
        resultado.innerHTML = "Su lista de amigos esta vacia"
    }
}

function actualizarLista(lista){
    //Obtenemos el elemento
    let elementoLista = document.getElementById("listaAmigos");
    elementoLista.innerHTML = ""; //Vaciamos la etiqueta

    lista.forEach(element => { //Recorremos la lista y guardamos los elementos en una variable
        elementoLista.innerHTML += `<li>${element}</li>` //Mostramos el elemento en un item
    });
}

function elementoHTML(id, mensaje){
    document.getElementById(id).innerText = mensaje;
}