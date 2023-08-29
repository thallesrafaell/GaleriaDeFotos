$(document).ready(function(){
    $('header button').click(function(e){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoNovaImagem = $('#endereco-imagem-nova').val()
        const novoitem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoitem)
        $(`<div class="overlay-imagem-link">
        <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
        </div>`).appendTo(novoitem)
        $(novoitem).appendTo('ul')
        $(novoitem).fadeIn(600)
        $('#endereco-imagem-nova').val('')

    })
}) 