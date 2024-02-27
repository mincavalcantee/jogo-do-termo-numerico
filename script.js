let listaNumerosGerados = [];
let listaNumerosEscolhidos = [];

function gerarNumero() {
  let numeroGerado = parseInt(Math.random() * 9);
  if (listaNumerosGerados.includes(numeroGerado)) {
    return gerarNumero();
  } else {
    listaNumerosGerados.push(numeroGerado);
  }
}

function gerarSequencia() {
  for (i = 0; i < 4; i++) {
    gerarNumero()
  }
  console.log(listaNumerosGerados);
}

gerarSequencia();

function adicionarNumero() {
  let numeroEscolhido = document.querySelector('input').value;
  listaNumerosEscolhidos.push(parseInt(numeroEscolhido));
  console.log(listaNumerosEscolhidos);
}