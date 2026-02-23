function mostrarCarros() {
  const carros = ["Gol", "Civic", "Corolla", "Onix", "HB20"];
  let i = 0;
  let continuar = true;

  do {
    continuar = confirm("Carro: " + carros[i] + "\nDeseja ver o próximo?"); //confirm() → pergunta algo (retorna true ou false)
    i++;
  } while (continuar && i < carros.length);

  document.getElementById("resultado").innerText = "Lista finalizada.";
}
