const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text')

input.addEventListener('input', handlerRange)

function handlerRange(evt){
    const fontText = evt.currentTarget.value;
    text.style.fontSize = `${fontText}px`;
}