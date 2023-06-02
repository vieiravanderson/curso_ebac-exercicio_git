const form = document.querySelector('#formulario')
const numeroA = document.querySelector('#campo-a')
const numeroB = document.querySelector('#campo-b')
const message = document.querySelector('#message');

function validaForm(a, b) {
    return b > a
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numeroAValue = parseInt(numeroA.value);
    const numeroBValue = parseInt(numeroB.value);

    let formEhValido = validaForm(numeroAValue, numeroBValue);
     
    if(formEhValido) {
        message.innerHTML = 'Formulário enviado com sucesso!';
        message.classList.add('success-message');
        message.classList.remove('error-message');
    }else {
        message.innerHTML = 'O número B deve ser maior que o número A';
        message.classList.add('error-message')
        message.classList.remove('success-message');
    }
    
})


