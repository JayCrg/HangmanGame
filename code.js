var palabras = ['pescado', 'filologa', 'autobus', 'elefante', 'habitacion'];


function generarSpan(palabra) {
    for (let i = 0; i < palabra.split('').length; i++) {
        let span = document.createElement("span");
        span.class = 'letraSecreta;'
        document.getElementById('adivina').appendChild(span);
        span.innerHTML = '_'

    }
}

function escogerPalabra() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    generarSpan(palabra)
    return palabra;
}


/*function borrarSpan() {
    let span = document.getElementsByClassName('letraSecreta');
    for (let i = 0; i < span.length; i++) {
        span[i].remove();
    }
}

function restaurarVidas() {
    vidas = document.getElementById('vidas');
    vidas.innerHTML = 10;
}*/

function settear() {  

    var palabraEscogida = escogerPalabra();
    caracteresHtml = document.getElementsByClassName('caracter');
    console.log(caracteresHtml);
    spans = document.getElementsByTagName('span');

    for (i=0; i < caracteresHtml.length; i++) {
        caracteresHtml[i].addEventListener('click', (e) => {
            let letra = e.target.innerHTML;
            console.log(letra)
            let letras = palabraEscogida.split('');
            let span = document.getElementsByTagName('span');
            if(!letras.includes(letra)){
                vidas = document.getElementById('vidas');
                vidas.innerHTML = vidas.innerHTML - 1;
            }
            else{
            for (let i = 0; i < letras.length; i++) {
                if (letra == letras[i]) {
                    span[i].innerHTML = letra;
                    e.target.style.backgroundColor = 'black';
                    }
                }
            }
            if(vidas.innerHTML == 0){
                result = document.createElement('span');
                result.innerHTML= 'La palabra era: ' + palabraEscogida;
                document.getElementById('fin').appendChild(result);
                alert('Has perdido')
            }

            for (let i = 0; i < spans.length; i++) {
                if (spans[i].innerHTML == '_') {
                    return;
                }
            }
            alert('Has ganado');

            });
        }
        
}



window.onload = () => {
//añadir reinicio
    settear();
}

