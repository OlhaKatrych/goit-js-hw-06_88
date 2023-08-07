
const output = document.querySelector('#value');
const decremBtn = document.querySelector('button[data-action="decrement"]');
const incremBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decremBtn.addEventListener('click', handlerMinus)
function handlerMinus(){

counterValue -= 1;
output.textContent = counterValue;

}


incremBtn.addEventListener('click', handlerPlus)
function handlerPlus(){
    
counterValue += 1;
output.textContent = counterValue;

}
