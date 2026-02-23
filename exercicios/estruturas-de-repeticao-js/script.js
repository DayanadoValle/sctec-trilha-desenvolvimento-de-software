// ===============================
// ARRAY BASE
// ===============================
const carros = ["Uno", "Fusca", "Escort", "Gol"];

// ===============================
// ELEMENTO HTML
// ===============================
const conteudo = document.getElementById("conteudo");

// ===============================
// FUNÇÃO REUTILIZÁVEL
// ===============================
function criaSecao(titulo, dados) {
  const secao = document.createElement("div");
  secao.innerHTML = `<h2>${titulo}</h2>${dados}`;
  conteudo.appendChild(secao);
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//// EXEMPLO 1 — REUTILIZANDO A MESMA VARIÁVEL
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

let dados = "";

// WHILE
dados = "";
let i = 0;

while (i < carros.length) {
  dados += `<p>${carros[i]}</p>`;
  i++;
}

criaSecao("While (mesma variável)", dados);

// DO WHILE
dados = "";
i = 0;

do {
  dados += `<p>${carros[i]}</p>`;
  i++;
} while (i < carros.length);

criaSecao("Do While (mesma variável)", dados);

// FOR
dados = "";

for (let i = 0; i < carros.length; i++) {
  dados += `<p>${carros[i]}</p>`;
}

criaSecao("For (mesma variável)", dados);

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//// EXEMPLO 2 — VARIÁVEIS SEPARADAS
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// WHILE
let dadosWhile = "";
let j = 0;

while (j < carros.length) {
  dadosWhile += `<p>${carros[j]}</p>`;
  j++;
}

criaSecao("While (variável própria)", dadosWhile);

// DO WHILE
let dadosDoWhile = "";
j = 0;

do {
  dadosDoWhile += `<p>${carros[j]}</p>`;
  j++;
} while (j < carros.length);

criaSecao("Do While (variável própria)", dadosDoWhile);

// FOR
let dadosFor = "";

for (let k = 0; k < carros.length; k++) {
  dadosFor += `<p>${carros[k]}</p>`;
}

criaSecao("For (variável própria)", dadosFor);

// FOR OF
let dadosForOf = "";

for (let carro of carros) {
  dadosForOf += `<p>${carro}</p>`;
}

criaSecao("For Of (variável própria)", dadosForOf);

//FOR OF OM BREAK

dados = "";

for (let carro of carros) {
  if (carro === "Escort") break;

  dados += "<p>" + carro + "</p>";
}

criaSecao("Loop For Of com BREAK", dados);

// FOR OF COM CONTINUE

dados = "";

for (let carro of carros) {
  if (carro === "Escort") continue;

  dados += "<p>" + carro + "</p>";
}

criaSecao("Loop For Of com CONTINUE", dados);
//FOREATCH

dados = "";

carros.forEach((carro) => {
  dados += "<p>" + carro + "</p>";
});

criaSecao("Loop Foreach", dados);

// ===============================
// OBJETOS (MATRIZ DE OBJETOS)
// ===============================

let carro1 = { marca: "Ford", modelo: "Ka", ano: "2015" };
let carro2 = { marca: "Fiat", modelo: "Uno", ano: "2000" };

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);

// FOR OF + FOR IN
dados = "";

for (let carro of carros2) {
  let propriedades = "";

  for (let prop in carro) {
    propriedades += carro[prop] + " | ";
  }

  dados += `<p>${propriedades}</p>`;
}

criaSecao("Loop For In", dados);
