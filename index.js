const ligar = document.querySelector('.ligar')
const desligar = document.querySelector('.desligar')
const lampada = document.querySelector('img')

ligar.addEventListener('click', on)
function on() {
    lampada.setAttribute('src', 'image/ligada.png')
}

desligar.addEventListener('click', off)
function off() {
    lampada.setAttribute('src', 'image/desligada.png')
}

lampada.addEventListener('dblclick', fail)
function fail() {
    lampada.setAttribute('src', 'image/quebrada.png')
}
