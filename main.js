$(document).ready(function() {

    $('form').on('submit', function (e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-da-tarefa').val();
        const novaLi = $(`<li>
                            <span>${nomeTarefa}</span>
                        </li>`);
        novaLi.appendTo('ul');

        $('#nome-da-tarefa').val('');
    });

    $("ul").on("click", "li", function () {
        console.log(this)
        $(this).addClass('realizada');
    });

});

