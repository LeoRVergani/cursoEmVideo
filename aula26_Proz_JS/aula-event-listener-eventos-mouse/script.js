// Captura de elementos do DOM (Variáveis)
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01");
let qtdProduto01 = document.getElementById("quantidade-produto-01");
let btnSubtrairProduto01 = document.getElementById("btn-subtrair-produto-01");
let valorProduto01 = 11.66;

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

// Definir a manipular dos elementos capturados (Funções)
function atualizarSubtotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

atualizarSubtotal()


function adicionarUM(){
  // Adicionar 1 à quantidade do produto
  qtdProduto01.value = Number(qtdProduto01.value) + 1

  // Adicionar 1 ao subtotal
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1

  // Adicionar o valor do produto ao subtotal]
  subtotalInfo.valor = subtotalInfo.valor + valorProduto01

  // Atualizar o DOM
  atualizarSubtotal()
}

function subtrairUm(){
  qtdProduto01.value = Number(qtdProduto01.value) - 1
  subtotalInfo.quantidade = subtotalInfo.quantidade - 1
  subtotalInfo.valor = subtotalInfo.valor - valorProduto01
  atualizarSubtotal()
}


// Definir quando devem ser manipulador os elementos (Eventos)
btnAdicionarProduto01.addEventListener("click", adicionarUM)
btnSubtrairProduto01.addEventListener("click", subtrairUm)
