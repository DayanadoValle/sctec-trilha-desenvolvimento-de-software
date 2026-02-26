const botao = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

botao.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  overlay.classList.toggle("ativo");

  botao.textContent = menu.classList.contains("ativo") ? "✕" : "☰";
});

overlay.addEventListener("click", () => {
  menu.classList.remove("ativo");
  overlay.classList.remove("ativo");
  botao.textContent = "☰";
});
