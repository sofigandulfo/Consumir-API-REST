const URL = 'https://api.thecatapi.com/v1/images/search'

const gatitos = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    const img = document.querySelector('img');
        img.src = data[0].url;
    
    return img;
}
gatitos();


const boton = document.querySelector('button');

boton.addEventListener('click', gatitos);


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

boton.addEventListener('click', consumirAPI);


 */