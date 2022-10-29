function buscarProdutos() {

    const data = search_form.search_textbox.value;
    
    alert(`Busca solicitada por: ${data}`)
    
}

/* Conhece o jogo selecionado para adicionar ao carrinho */
var call = function(elementId)
{
    var game = document.getElementById(elementId).id
    alert(`Você está adicionando ao carrinho: ${game}`);
}
