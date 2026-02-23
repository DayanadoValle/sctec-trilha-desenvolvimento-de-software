function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

document.getElementById("redButton").addEventListener("click", function () {
  setBackgroundColor("red");
});

document.getElementById("greenButton").addEventListener("click", function () {
  setBackgroundColor("green");
});

document.getElementById("blueButton").addEventListener("click", function () {
  setBackgroundColor("blue");
});

document
  .getElementById("inputBox")
  .addEventListener("keydown", function (event) {
    document.getElementById("message").textContent =
      "Você pressionou: " + event.key;
  });

document.getElementById("clearButton").addEventListener("click", function () {
  // Volta o fundo para branco
  document.body.style.backgroundColor = "";

  // Limpa o input
  document.getElementById("inputBox").value = "";

  // Limpa a mensagem
  document.getElementById("message").textContent = "";
});
