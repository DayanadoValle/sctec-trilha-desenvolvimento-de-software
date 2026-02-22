const form = document.getElementById("form");
const resultado = document.getElementById("resultado");
const inputPreco = document.getElementById("preco");
const inputDesconto = document.getElementById("desconto");

/* =========================
   MÁSCARA DE MOEDA (BR)
========================= */
inputPreco.addEventListener("input", function (e) {
  let valor = e.target.value.replace(/\D/g, "");

  if (!valor) {
    e.target.value = "";
    return;
  }

  valor = (valor / 100).toFixed(2);
  valor = valor.replace(".", ",");
  valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  e.target.value = valor;
});

/* =========================
   VALIDAÇÃO DESCONTO
========================= */
inputDesconto.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");

  if (this.value > 100) {
    this.value = 100;
  }
});

/* =========================
   SUBMIT
========================= */
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const preco = parseFloat(
    inputPreco.value.replace(/\./g, "").replace(",", ".")
  );

  const desconto = parseFloat(inputDesconto.value);

  if (
    isNaN(preco) ||
    isNaN(desconto) ||
    preco <= 0 ||
    desconto < 0 ||
    desconto > 100
  ) {
    resultado.textContent = "Insira valores válidos.";
    return;
  }

  const valorDesconto = (preco * desconto) / 100;
  const precoFinal = preco - valorDesconto;

  resultado.textContent =
    "Preço final: R$ " + precoFinal.toFixed(2).replace(".", ",");
});
