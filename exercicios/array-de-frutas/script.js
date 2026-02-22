// 1️⃣ Criar array com 5 frutas
const frutas = ["Maçã", "Banana", "Uva", "Laranja", "Abacaxi"];

// 2️⃣ Exibir array completo
console.log("Array completo:", frutas);

// 3️⃣ Acessar o terceiro item (índice 2)
console.log("Terceira fruta:", frutas[2]);

// 4️⃣ Alterar o segundo item (índice 1)
frutas[1] = "Manga";
console.log("Array atualizado:", frutas);

// 5️⃣ Adicionar duas frutas no final
frutas.push("Morango");
frutas.push("Kiwi");

console.log("Após adicionar frutas:", frutas);

// 6️⃣ Exibir todas as frutas usando forEach
console.log("Lista de frutas:");
frutas.forEach(fruta => console.log(fruta));