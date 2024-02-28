let listaNumerosGerados = [];
let listaNumerosEscolhidos = [];

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

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
  limparCampo();
  console.log(listaNumerosEscolhidos);
}

function limparCampo() {
  valor = document.querySelector('input');
  valor.value = '';
}

let numerosCertos = 0;
let numerosErrados = 0;
let tentativas = 0;
function compararListas() {
  for (i = 0; i < 4; i++) {
    if (listaNumerosGerados.indexOf(listaNumerosEscolhidos[i]) != -1 && listaNumerosGerados[i] == listaNumerosEscolhidos[i]) {
      numerosCertos++;
      tentativas++;
    } else if (listaNumerosGerados.indexOf(listaNumerosEscolhidos[i]) != -1 && listaNumerosGerados[i] != listaNumerosEscolhidos[i]) {
      numerosErrados++;
      tentativas++;
    }
  }
}

function verificarChute() {
  compararListas();
  exibirTexto('h3', `Números Certos: ${numerosCertos}. Números Errados: ${numerosErrados}`);
}

function novoJogo() {
  listaNumerosGerados = [];
  gerarSequencia();
  limparCampo();
  exibirTexto('h3', '');
  numerosCertos = 0;
  numerosErrados = 0;
  tentativas = 0;
}
