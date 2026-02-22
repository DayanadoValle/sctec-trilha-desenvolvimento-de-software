console.log("JS carregou");

const nomes = ["Ana", "Carlos", "Marina", "João"];

function sortearNome() {

  if (nomes.length === 0) {
    document.getElementById("resultado").textContent =
      "Todos os nomes já foram sorteados!";
    return;
  }

  const indice = Math.floor(Math.random() * nomes.length);

  const sorteado = nomes.splice(indice, 1)[0];

  document.getElementById("resultado").textContent =
    `🎉 Nome sorteado: ${sorteado}`;
}

function adicionarNome() {
  const input = document.getElementById("novoNome");
  const nome = input.value.trim();

  if (nome === "") return;

  nomes.push(nome);

  input.value = "";

  console.log("Lista atual:", nomes);
}