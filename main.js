//API REST
const URL = 'https://api.thecatapi.com/v1/images/search'
let listaUrl = [];
let actualUrl = '';



//Petición (?)
const gatitos = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    const url = data[0].url;
    const img = document.querySelector('#img');
        img.src = data[0].url;
    actualUrl = url;
    listaUrl.push(actualUrl);


    return img;
}
gatitos();


//Función para volver a la imagen anterior (solo vuelve al último)
const cargarImagenAnterior = () => {
    let copiaListaUrl = listaUrl.slice();
    const ultimaImg = copiaListaUrl[copiaListaUrl.length-2];
    const img = document.querySelector('#img');
    img.src = ultimaImg;
}


//Función para volver a la imagen siguiente
const cargarSiguiente = () => {
    let copiaListaUrl = listaUrl.slice();
    const siguiente = copiaListaUrl[copiaListaUrl.length-1];
    const img = document.querySelector('#img');
    img.src = siguiente;
}


//Botón para generar una imagen random
const boton = document.querySelector('button');
//Evento del boton
boton.addEventListener('click', gatitos);


//Botón para volver a la imagen anterior
const back = document.getElementById('back');
//Evento del boton
back.addEventListener('click', cargarImagenAnterior);

//Botón para ir a la imagen siguiente
const siguiente = document.getElementById('siguiente');
//Evento del boton
siguiente.addEventListener('click', cargarSiguiente);


/*
function consumirAPI(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    });
} consumirAPI();


const boton = document.querySelector('button');

boton.addEventListener('click', consumirAPI);*/