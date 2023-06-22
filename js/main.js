$(document).ready(function () {

    $('#cpf').mask('00000000000', {
        placeholder: "000.000.000-00"
    }) 

    $('#telefone').mask('(00)00000-0000', {
        placeholder: "(99)99999-9999"
    })

    $('#cep').mask('00000-000', {
        placeholder: "00000-000"
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira o nome completo",
            email: "Insira o seu e-mail",
            telefone: "Digite seu telefone",
            cpf: "Digite seu CPF",
            endereco: "Informe seu endereço",
            cep: "Informe seu CEP"
        }

    })


})

