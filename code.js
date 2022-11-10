var palabrasEsp = ['pescado', 'filologia', 'autobus', 'elefante', 'habitacion'];
var palabrasIng = ['fish', 'filology', 'bus', 'elephant', 'room'];//['bus']
var palabrasRuso = ['рыба', 'филология', 'автобус', 'слон', 'комната'];
var vidas = 10;

function seleccionarAlfabeto() {
    arrayIdiomas = document.getElementsByClassName('idioma')
    for (let i = 0; i < arrayIdiomas.length; i++) {
        arrayIdiomas[i].addEventListener('click', (e) => {
            crearAlfabeto(e.target.id);

        });
    }
}

function crearAlfabeto(idioma) {
    //borrar el alfabeto anterior
    borrarLetras();
    borrarSpan();

    if (idioma == 'es') {
        var alfabeto = 'abcdefghijklmnñopqrstuvwxyz';
        palabras = palabrasEsp;

    }
    if (idioma == 'en') {
        var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
        palabras = palabrasIng;
    }
    if (idioma == 'rus') {
        var alfabeto = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        palabras = palabrasRuso;
    }
    arrayAlfabeto = alfabeto.split('');
    for (let i = 0; i < arrayAlfabeto.length; i++) {
        let botonLetra = document.createElement('button');
        botonLetra.innerHTML = arrayAlfabeto[i];
        botonLetra.setAttribute('id', arrayAlfabeto[i]);
        botonLetra.setAttribute('class', 'caracter');
        document.getElementById('letras').appendChild(botonLetra);
    }
    settear();
}



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

function reiniciar() {
    borrarLetras();
    borrarSpan();
    borrarResultado();
    vidas = 10;
    document.getElementById('vidas').innerHTML = vidas;
}

function borrarLetras() {
    let elemento = document.getElementById("letras");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function borrarSpan() {
    let elemento = document.getElementById("adivina");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function borrarResultado() {
    let elemento = document.getElementById("fin");
    borrar = true
    while (borrar) {
        elemento.removeChild(elemento.firstChild);
        if (elemento.firstChild.id == 'retry')
        borrar = false;
    }
}





function settear() {

    var palabraEscogida = escogerPalabra();
    caracteresHtml = document.getElementsByClassName('caracter');
    spans = document.getElementsByTagName('span');//espacios en blanco
    for (let i = 0; i < caracteresHtml.length; i++) {
        caracteresHtml[i].addEventListener('click', (e) => {
            let letra = e.target.innerHTML;
            let letras = palabraEscogida.split('');
            let span = document.getElementsByTagName('span');
            if (!letras.includes(letra)) {
                vidasHTML = document.getElementById('vidas');
                vidas--;
                if (vidas >= 0) {
                    e.target.style.backgroundColor = '#c1d62f';
                    e.target.style.color = '#c1d62f';
                    e.target.style.transition = '1s';
                    e.target.setAttribute('disabled', '');
                    vidasHTML.innerHTML = vidas;
                }
                else {
                    botones = document.getElementsByClassName('caracter');
                    for (let i = 0; i < botones.length; i++) {
                        botones[i].setAttribute('disabled', '');
                    }
                }
                if (vidas == 0) {
                    result = document.createElement('span');
                    result.setAttribute('class', 'resultado');
                    result.innerHTML = 'La palabra era: ' + palabraEscogida;
                    console.log(typeof document.querySelectorAll('#fin :nth-child(2)'));
                    document.getElementById('fin').insertBefore(result, document.getElementById('fin').firstChild);
                    derrota = document.createElement('span');
                    derrota.innerHTML = 'Has perdido';
                    derrota.style.backgroundColor = 'red';
                    derrota.setAttribute('class', 'resultado');
                    document.getElementById('fin').insertBefore(derrota, document.getElementById('fin').firstChild);
                    derrota.style.padding = '5px';
                }
            }
            else {
                arrayAuxliar = [];
                for (let i = 0; i < spans.length; i++)
                arrayAuxliar.push(spans[i].innerHTML);
                
                for (let i = 0; i < letras.length; i++) {
                    if (letra == letras[i]) {
                        span[i].innerHTML = letra;
                        e.target.style.backgroundColor = 'black';
                        e.target.style.transition = '1s';
                        e.target.setAttribute('disabled', '');
                    //     if (!arrayAuxliar.includes('_')) {
                    //         botones = document.getElementsByClassName('caracter');
                    //         for (let i = 0; i < botones.length; i++) {
                    //             botones[i].setAttribute('disabled', '');
                    //         }
                    //         victoria = document.createElement('span');
                    //         victoria.innerHTML = 'Has ganado';
                    //         victoria.setAttribute('class', 'resultado');
                    //         victoria.style.backgroundColor = 'green';
                    //         victoria.style.padding = '5px';
                    //         document.getElementById('fin').insertBefore(derrota, document.getElementById('fin').firstChild);
                    // }
                }
            }
        }
        });
    }
}



window.onload = () => {

    seleccionarAlfabeto();
    document.getElementById('retry').addEventListener('click', reiniciar);
}