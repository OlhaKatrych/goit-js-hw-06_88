
const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', handlerInput)
 
function handlerInput(evt) {

    if(evt.currentTarget.value.trim()){
     output.textContent = evt.currentTarget.value;
    } else {
      output.textContent = "Anonymous";
    }
  };

