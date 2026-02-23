const btn = document.getElementById("btnSaudacao");

btn.addEventListener("click", mostraSaudacao);

function mostraSaudacao() {
  const nome = document.getElementById("nome").value;
  const hora = parseInt(document.getElementById("hora").value, 10);
  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = saudacaoPersonalizada(nome, hora);
}

function saudacaoPersonalizada(nome, hora) {
  if (!nome || isNaN(hora)) {
    return "Preencha todos os campos.";
  }

  if (hora < 12) {
    return `Bom dia, ${nome}!`;
  } else if (hora < 18) {
    return `Boa tarde, ${nome}!`;
  } else {
    return `Boa noite, ${nome}!`;
  }
}
