function mostrarSaudacao() {
  const idioma = document.getElementById("language").value;
  const mensagemElemento = document.getElementById("message");

  let mensagem = "";

  switch (idioma) {
    case "pt":
      mensagem = "Olá! Seja bem-vindo(a)! ✨";
      mensagemElemento.dir = "ltr";
      break;

    case "en":
      mensagem = "Hello! Welcome! ✨";
      mensagemElemento.dir = "ltr";
      break;

    case "es":
      mensagem = "¡Hola! ¡Bienvenido(a)! ✨";
      mensagemElemento.dir = "ltr";
      break;

    case "fr":
      mensagem = "Bonjour! Bienvenue! ✨";
      mensagemElemento.dir = "ltr";
      break;

    case "ru":
      mensagem = "Привет! Добро пожаловать! ✨";
      mensagemElemento.dir = "ltr";
      break;

    case "zh":
      mensagem = "你好！欢迎！✨";
      mensagemElemento.dir = "ltr";
      break;

    case "ko":
      mensagem = "안녕하세요! 환영합니다! ✨";
      mensagemElemento.dir = "ltr";
      break;

    case "ja":
      mensagem = "こんにちは！ようこそ！✨";
      mensagemElemento.dir = "ltr";
      break;

    case "hi":
      mensagem = "नमस्ते! आपका स्वागत है! ✨";
      mensagemElemento.dir = "ltr";
      break;

    case "ar":
      mensagem = "مرحبا! أهلا وسهلا! ✨";
      mensagemElemento.dir = "rtl";
      break;

    default:
      mensagem = "Por favor, selecione um idioma.";
      mensagemElemento.dir = "ltr";
  }

  mensagemElemento.textContent = mensagem;
}
