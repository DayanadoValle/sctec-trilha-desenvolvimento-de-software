// Selecionando elementos
const input = document.getElementById("tarefaInput");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

// ADICIONAR TAREFA

btnAdicionar.addEventListener("click", adicionarTarefa);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});

function adicionarTarefa() {
  const texto = input.value.trim();

  if (texto === "") return;

  const li = document.createElement("li");

  const spanTexto = document.createElement("span");
  spanTexto.textContent = texto;

  li.appendChild(spanTexto);
  li.appendChild(criarBotoes(li, spanTexto));

  lista.appendChild(li);

  input.value = "";
  input.focus();
}

// CRIAR BOTÕES (EDITAR / EXCLUIR)
function criarBotoes(li, spanTexto) {
  const container = document.createElement("div");

  // Botão editar
  const btnEditar = document.createElement("button");
  btnEditar.textContent = "✏️";
  btnEditar.addEventListener("click", function () {
    editarTarefa(li, spanTexto);
  });

  // Botão excluir
  const btnExcluir = document.createElement("button");
  btnExcluir.textContent = "🗑️";
  btnExcluir.addEventListener("click", function () {
    li.remove();
  });

  container.appendChild(btnEditar);
  container.appendChild(btnExcluir);

  return container;
}

// EDITAR TAREFA
function editarTarefa(li, spanTexto) {
  const textoAtual = spanTexto.textContent;

  const inputEdicao = document.createElement("input");
  inputEdicao.type = "text";
  inputEdicao.value = textoAtual;
  inputEdicao.classList.add("edit-input");

  const btnSalvar = document.createElement("button");
  btnSalvar.textContent = "💾";

  const btnCancelar = document.createElement("button");
  btnCancelar.textContent = "❌";

  // Limpa o li
  li.innerHTML = "";
  li.appendChild(inputEdicao);
  li.appendChild(btnSalvar);
  li.appendChild(btnCancelar);

  inputEdicao.focus();

  function salvar() {
    const novoTexto = inputEdicao.value.trim();
    if (novoTexto === "") return;

    spanTexto.textContent = novoTexto;

    li.innerHTML = "";
    li.appendChild(spanTexto);
    li.appendChild(criarBotoes(li, spanTexto));
  }

  function cancelar() {
    li.innerHTML = "";
    li.appendChild(spanTexto);
    li.appendChild(criarBotoes(li, spanTexto));
  }

  btnSalvar.addEventListener("click", salvar);
  btnCancelar.addEventListener("click", cancelar);

  inputEdicao.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      salvar();
    }
  });
}
