const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener('blur', handlerBlur);
function handlerBlur(evt){

    if(evt.currentTarget.value.length === Number(evt.currentTarget.getAttribute('data-length'))){
        inputValid.classList.remove('invalid');
        inputValid.classList.add('valid');

    }else{

        inputValid.classList.remove('valid');
        inputValid.classList.add('invalid');
    }
}