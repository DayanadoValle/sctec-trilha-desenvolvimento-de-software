function clientePedido(numeroPedido) {

  switch (numeroPedido) {

    case 1:
      return "🍕 Pizza de Calabresa";

    case 2:
      return "🧀 Pizza de Quatro Queijos";

    case 3:
      return "🍗 Pizza de Frango com Catupiry";

    case 4:
      return "🍫 Pizza de Brigadeiro";

    default:
      return "❌ Número do pedido inválido";
  }
}

document.getElementById("btnPedido")
  .addEventListener("click", function () {

    const numero = Number(
      document.getElementById("pedido").value
    );

    const resultado = clientePedido(numero);

    document.getElementById("resultado").innerText = resultado;

});