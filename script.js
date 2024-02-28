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
  if (listaNumerosEscolhidos.length < 4) {
    let numeroEscolhido = document.querySelector('input').value;
    listaNumerosEscolhidos.push(parseInt(numeroEscolhido));
    limparCampo();
    exibirTexto('h4', `Números Escolhidos: ${listaNumerosEscolhidos}`);
  } else {
    document.getElementById('botaoAdicionar').setAttribute('disabled', true);
  }
}

function limparCampo() {
  valor = document.querySelector('input');
  valor.value = '';
}

let numerosCertos = 0;
let numerosErrados = 0;
function compararListas() {
  for (i = 0; i < 4; i++) {
    if (listaNumerosGerados.indexOf(listaNumerosEscolhidos[i]) != -1 && listaNumerosGerados[i] == listaNumerosEscolhidos[i]) {
      numerosCertos++;
    } else if (listaNumerosGerados.indexOf(listaNumerosEscolhidos[i]) != -1 && listaNumerosGerados[i] != listaNumerosEscolhidos[i]) {
      numerosErrados++;
    }
  }
}

function verificarChute() {
  compararListas();
  if (numerosCertos == 4) {
    exibirTexto('h3', `Parabéns! Você acertou!`);
    exibirTexto('h5', `Número de Tentativas: ${tentativas}`);
  } else {
    exibirTexto('h3', `Números Certos: ${numerosCertos}. Números Errados: ${numerosErrados}`);
    exibirTexto('h4', `Números Escolhidos: ${listaNumerosEscolhidos}`);
    exibirTexto('h5', `Número de Tentativas: ${tentativas}`);
  }
}

function novoJogo() {
  listaNumerosGerados = [];
  listaNumerosEscolhidos = [];
  gerarSequencia();
  limparCampo();
  exibirTexto('h3', '');
  exibirTexto('h4', '');
  exibirTexto('h5', '');
  numerosCertos = 0;
  numerosErrados = 0;
  tentativas = 1;
}

let tentativas = 1;
function novaTentativa() {
  exibirTexto('h4', '');
  exibirTexto('h5', '');
  listaNumerosEscolhidos = [];
  numerosCertos = 0;
  numerosErrados = 0;
  document.getElementById('botaoAdicionar').removeAttribute('disabled');
  limparCampo();
  tentativas++;
}
