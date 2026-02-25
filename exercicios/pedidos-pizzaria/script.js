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
    
    case 5:
      return "🍖 Pizza de Portuguesa";

    case 6:
      return "🥓 Pizza de Bacon";

    case 7:
      return "🌽Pizza de Milho";
    
    case 8:
      return "🍅 Pizza de Marguerita";

    case 9:
      return "🌶️ Pizza de Calabresa Especial";

    case 10:
      return "🥩Pizza de Carne Seca";

    case 11:
      return "🧄 Pizza de Alho e Óleo";

    case 12:
      return "🧅 Pizza de Cebola Caramelizada";

    case 13:
      return "🫒 Pizza de Azeitona Especial";

    case 14:
      return "🧀 Pizza de Cheddar com Bacon";

    case 15:
      return "🍤Pizza de Camarão";

     case 16:
      return "🥦 Pizza de Vegetariana";


     case 17:
      return "🌭 Pizza de Hot Dog";
 
     case 18:
      return "🍍Pizza de  Havaiana";

     case 19:
      return "🍫 Pizza de prestígio";


     case 20:
      return "🍓 Pizza deMorango com Chocolate";


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