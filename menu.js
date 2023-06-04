var carrinho = [];

// Função para adicionar item ao carrinho
function addToCart(item) {
  carrinho.push(item);
  updateCarrinho();
}

// Função para atualizar o conteúdo do carrinho na página
function updateCarrinho() {
  var carrinhoLista = document.getElementById('carrinho-lista');
  carrinhoLista.innerHTML = '';

  for (var i = 0; i < carrinho.length; i++) {
    var item = carrinho[i];
    var li = document.createElement('li');
    li.textContent = item;
    carrinhoLista.appendChild(li);
  }
}

// Função para enviar o pedido via WhatsApp
function enviarPedido() {
  if (carrinho.length === 0) {
    var mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'O carrinho está vazio. Adicione itens antes de enviar o pedido.';
    return;
  }

  var pedido = carrinho.join('\n');
  var message = encodeURIComponent('Pedido:\n' + pedido);
  window.open('https://wa.me/+5583999149996?text=' + message);

  // Limpar carrinho após enviar o pedido
  carrinho = [];
  updateCarrinho();
}
