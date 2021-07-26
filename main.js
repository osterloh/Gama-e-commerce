class Cliente {
  constructor(nome, email, telefone, cidade) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.cidade = cidade;
  }
}

class Produto {
  constructor(produto, marca, quantidade, valor) {
    this.produto = produto;
    this.marca = marca;
    this.quantidade = quantidade;
    this.valor = valor;
  }
}

class Venda {
  constructor(cliente, produto, quantidade, valor) {
    this.cliente = cliente;
    this.produto = produto;
    this.quantidade = quantidade;
    this.valor = valor;
  }
}

function cadCliente() {
  let nomeCliente = document.getElementById("nome").value;
  let emailCliente = document.getElementById("email").value;
  let telefoneCliente = document.getElementById("telefone").value;
  let cidadeCliente = document.getElementById("cidade").value;

  let cliente = new Cliente(
    nomeCliente,
    emailCliente,
    telefoneCliente,
    cidadeCliente
  );

  let clientes = new Array();

  clientes.push(cliente);

  if (localStorage.getItem("@OsterlohGama:cliente") != null) {
    let dados = JSON.parse(localStorage.getItem("@OsterlohGama:cliente"));
    dados.forEach((dado) => clientes.push(dado));
  }

  localStorage.setItem("@OsterlohGama:cliente", JSON.stringify(clientes));
}

function cadProduto() {
  let nomeProduto = document.getElementById("produto").value;
  let marcaProduto = document.getElementById("marca").value;
  let quantidadeProduto = document.getElementById("quantidade").value;
  let valorProduto = document.getElementById("valor").value;

  let produto = new Produto(
    nomeProduto,
    marcaProduto,
    quantidadeProduto,
    valorProduto
  );

  let produtos = new Array();

  produtos.push(produto);

  if (localStorage.getItem("@OsterlohGama:produto") != null) {
    let dados = JSON.parse(localStorage.getItem("@OsterlohGama:produto"));
    dados.forEach((dado) => produtos.push(dado));
  }

  localStorage.setItem("@OsterlohGama:produto", JSON.stringify(produtos));
}

function realizarVenda() {
  alert("Em Desenvolvimento");
}
