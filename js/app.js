    // quando a página é carregada, eu quero que os valores da lista e do valor total de carrinhos sejam 0:
document.getElementById('lista-produtos').textContent='';
document.getElementById('valor-total').textContent='R$0,00';

    // variavel para eu usada dentro da função para somar o valor total do carrinho:
let totalSomaCarrinho=0;

// ADICIONAR O PRODUTO NO CARRINHO
function adicionar(){
    //Recuperar valores: nome, quantidade, valor
    let produto = document.getElementById('produto').value; 
    // Método split para separar o nome do produto e o valor
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    const quantidade = document.getElementById('quantidade').value; 
    
    if(quantidade <1){
        alert('Quantidde invalida, selecione a quantidade desejada.')
    } else{

    //calcular o preço (subtotal)
    let preco = quantidade * valorUnitario;
        //converto o preco em valor BRL com toLocaleString
    let precoBRL = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos')
        //cada vez que o botao adicionar() for clicado, será adicionado os novos valores na tela, sem apagar o valor anterior. (utilizar innerHTML)
    carrinho.innerHTML =carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${precoBRL}</span>
    </section>`

    //atualizar o valor total
    totalSomaCarrinho = totalSomaCarrinho + preco;
    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.innerHTML = totalSomaCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //zerar o campo da quantidade
    document.getElementById('quantidade').value = 0;
}

}



// LIMPAR O CARRINHO
function limpar(){
    document.getElementById('lista-produtos').textContent='';
    document.getElementById('valor-total').textContent='R$0,00';
    totalSomaCarrinho = 0;

}